"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Category = {
  name: string;
  slug: string;
};

const QUIZ_API_KEY =
  process.env.NEXT_PUBLIC_QUIZ_API_KEY ?? "qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2";

const FALLBACK_CATEGORIES: Category[] = [
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
];

const flattenCategories = (groups: any[]): Category[] => {
  const flattened: Category[] = [];

  groups.forEach((group) => {
    const directCategories = Array.isArray(group?.categories) ? group.categories : [];

    if (directCategories.length > 0) {
      directCategories.forEach((category: any) => {
        if (category?.name && category?.slug) {
          flattened.push({
            name: category.name,
            slug: category.slug,
          });
        }
      });
      return;
    }

    if (group?.name && group?.slug) {
      flattened.push({
        name: group.name,
        slug: group.slug,
      });
    }
  });

  return flattened.filter(
    (entry, index, array) =>
      array.findIndex((item) => item.slug === entry.slug && item.name === entry.name) === index,
  );
};

export default function FetchCategory() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Unable to load quiz categories right now.");
        }

        const data = await response.json();
        const available = Array.isArray(data?.data) ? data.data : [];

        if (isMounted) {
          setCategories(available);
        }
      } catch (loadError) {
        if (isMounted) {
          setCategories(FALLBACK_CATEGORIES);
          setError(
            loadError instanceof Error
              ? "Quiz API is unavailable right now. Showing a local demo set instead."
              : "Unable to load quiz categories.",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedCategory || !selectedDifficulty) {
      return;
    }

    router.push(`/questions/${encodeURIComponent(selectedCategory)}/${encodeURIComponent(selectedDifficulty)}`);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Quiz Builder</p>
          <h2 className="mt-2 text-2xl font-black text-white">Choose your challenge</h2>
        </div>
      </div>

      {isLoading && (
        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-sm text-slate-200">
          Loading categories...
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Category</p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => {
                const isSelected = selectedCategory === category.slug;

                return (
                  <label
                    key={category.slug}
                    className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-500/10 text-white shadow-lg shadow-indigo-900/20"
                        : "border-white/10 bg-slate-950/40 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800/80"
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <input
                      type="radio"
                      name="category"
                      value={category.slug}
                      checked={isSelected}
                      onChange={(event) => setSelectedCategory(event.target.value)}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Difficulty</p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {["easy", "medium", "hard", "expert"].map((difficulty) => {
                const isSelected = selectedDifficulty === difficulty;

                return (
                  <label
                    key={difficulty}
                    className={`flex cursor-pointer items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-500/10 text-white"
                        : "border-white/10 bg-slate-950/40 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800/80"
                    }`}
                  >
                    {difficulty}
                    <input
                      type="radio"
                      name="difficulty"
                      value={difficulty}
                      checked={isSelected}
                      onChange={(event) => setSelectedDifficulty(event.target.value)}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedCategory || !selectedDifficulty}
            className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Start quiz
          </button>
        </form>
      )}
    </div>
  );
}