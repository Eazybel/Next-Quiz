import QuizExperience from "@/app/components/QuizExperience/QuizExperience";

type ParamsType = {
  params: Promise<{ category: string; difficulty: string }>;
};

function normalizeQuestion(item: any) {
  const answerList = Array.isArray(item?.answers) ? item.answers : [];
  const normalizedAnswers: Record<string, string> = {};
  const normalizedCorrect: Record<string, string> = {};

  answerList.forEach((answer: any, index: number) => {
    const key = `answer_${String.fromCharCode(97 + index)}`;
    const value = typeof answer === "string" ? answer : answer?.text ?? "";

    normalizedAnswers[key] = value;

    if (answer && typeof answer === "object" && answer.isCorrect) {
      normalizedCorrect[`${key}_correct`] = "true";
    }
  });

  const questionText = item?.text ?? item?.question ?? "Untitled question";

  return {
    id: item?.id ?? questionText,
    question: questionText,
    answers: normalizedAnswers,
    correct_answers: normalizedCorrect,
    multiple_correct_answers: item?.multiple_correct_answers ?? "false",
  };
}

export default async function SingleTest({ params }: ParamsType) {
  const paramsItem = await params;
  const category = decodeURIComponent(paramsItem.category);
  const difficulty = decodeURIComponent(paramsItem.difficulty);

  const apiKey =
    process.env.QUIZ_API_KEY ?? "qa_sk_84cb0450a91a0e65b7e4461ac4df9decb89b74d2";

  const queryString = new URLSearchParams({
    category: category.toLowerCase(),
    difficulty: difficulty.toLowerCase(),
    type: "MULTIPLE_CHOICE",
    limit: "10",
    offset: "0",
  });

  let fetchedData: any[] = [];

  try {
    const res = await fetch(`https://quizapi.io/api/v1/questions?${queryString.toString()}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Questions API failed");
    }

    const data = await res.json();
    const rawQuestions = Array.isArray(data?.data) ? data.data : [];
    fetchedData = rawQuestions.map(normalizeQuestion);
  } catch {
    fetchedData = [
      {
        id: "fallback-question-1",
        question: "Which JavaScript keyword is used to declare a variable that cannot be reassigned?",
        answers: {
          answer_a: "let",
          answer_b: "const",
          answer_c: "var",
          answer_d: "function",
        },
        correct_answers: {
          answer_b_correct: "true",
        },
      },
      {
        id: "fallback-question-2",
        question: "Which HTML tag is used to create a link?",
        answers: {
          answer_a: "<link>",
          answer_b: "<a>",
          answer_c: "<href>",
          answer_d: "<url>",
        },
        correct_answers: {
          answer_b_correct: "true",
        },
      },
    ];
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <QuizExperience
        questions={fetchedData}
        category={category}
        difficulty={difficulty}
      />
    </main>
  );
}
