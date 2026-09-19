import { NextResponse } from "next/server";

const API_KEY = process.env.QUIZ_API_KEY ?? "qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2";

const flattenCategories = (groups: any[]) => {
  const flattened: Array<{ name: string; slug: string }> = [];

  groups.forEach((group) => {
    const directCategories = Array.isArray(group?.categories) ? group.categories : [];

    if (directCategories.length > 0) {
      directCategories.forEach((category: any) => {
        if (category?.name && category?.slug) {
          flattened.push({ name: category.name, slug: category.slug });
        }
      });
      return;
    }

    if (group?.name && group?.slug) {
      flattened.push({ name: group.name, slug: group.slug });
    }
  });

  return flattened.filter(
    (entry, index, array) =>
      array.findIndex((item) => item.slug === entry.slug && item.name === entry.name) === index,
  );
};

export async function GET() {
  try {
    const response = await fetch("https://quizapi.io/api/v1/categories", {
      headers: {
        "X-Api-Key": API_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Quiz API unavailable" },
        { status: response.status || 500 },
      );
    }

    const data = await response.json();
    const categories = Array.isArray(data?.data) ? flattenCategories(data.data) : [];

    return NextResponse.json({ data: categories });
  } catch (error) {
    return NextResponse.json(
      {
        data: [
          { name: "JavaScript", slug: "javascript" },
          { name: "TypeScript", slug: "typescript" },
          { name: "Python", slug: "python" },
          { name: "React", slug: "react" },
          { name: "Node.js", slug: "node-js" },
          { name: "CSS", slug: "css" },
          { name: "SQL", slug: "sql" },
          { name: "Git", slug: "git" },
          { name: "Docker", slug: "docker" },
          { name: "AWS", slug: "aws" },
        ],
        fallback: true,
      },
      { status: 200 },
    );
  }
}
