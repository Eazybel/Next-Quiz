"use client";

import { useMemo, useState } from "react";
import Choose from "@/app/components/Choose/Choose";
import Question from "@/app/components/Question/Question";
import SubmitForm from "@/app/components/Submit/Submit";

export type QuizQuestion = {
  id?: string;
  question: string;
  answers?: Record<string, string | null | undefined>;
  correct_answers?: Record<string, string | null | undefined>;
  multiple_correct_answers?: string;
};

type QuizExperienceProps = {
  questions: QuizQuestion[];
  category: string;
  difficulty: string;
};

function normalizeAnswerChoices(question: QuizQuestion) {
  const rawAnswers = question.answers ?? {};

  if (Array.isArray(rawAnswers)) {
    return rawAnswers
      .map((answer, index) => {
        const value = typeof answer === "string" ? answer : answer?.text ?? "";
        return [`answer_${String.fromCharCode(97 + index)}`, value];
      })
      .filter(([, value]) => typeof value === "string" && value.trim().length > 0);
  }

  return Object.entries(rawAnswers).filter(
    ([, value]) => typeof value === "string" && value.trim().length > 0,
  );
}

export default function QuizExperience({
  questions,
  category,
  difficulty,
}: QuizExperienceProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      const questionId = question.id ?? question.question;
      const selected = selectedAnswers[questionId];
      const correctKey = Object.entries(question.correct_answers ?? {}).find(
        ([, value]) => value === "true",
      )?.[0];
      const correctAnswer = correctKey
        ? question.answers?.[correctKey.replace("_correct", "")] ?? ""
        : "";

      return total + (selected && selected === correctAnswer ? 1 : 0);
    }, 0);
  }, [questions, selectedAnswers]);

  const answeredCount = Object.keys(selectedAnswers).length;
  const isComplete = questions.length > 0 && answeredCount === questions.length;

  const handleSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((current) => ({ ...current, [questionId]: answer }));
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-indigo-950/30 backdrop-blur">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
          {category} • {difficulty}
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Quiz challenge
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
          Answer every question to unlock your final score.
        </p>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => {
          const questionId = question.id ?? `${question.question}-${index}`;
          const answerChoices = normalizeAnswerChoices(question);
          const correctKey = Object.entries(question.correct_answers ?? {}).find(
            ([, value]) => value === "true",
          )?.[0];
          const correctAnswer = correctKey
            ? question.answers?.[correctKey.replace("_correct", "")] ?? ""
            : "";
          const selectedAnswer = selectedAnswers[questionId] ?? "";

          return (
            <article
              key={questionId}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/40 sm:p-6"
            >
              <Question text={question.question} number={index + 1} />

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {answerChoices.map(([answerKey, answerValue]) => {
                  const optionText = String(answerValue ?? "");
                  const isChecked = selectedAnswer === optionText;

                  return (
                    <Choose
                      key={`${questionId}-${answerKey}`}
                      name={questionId}
                      text={optionText}
                      value={optionText}
                      checked={isChecked}
                      onChange={() => handleSelect(questionId, optionText)}
                    />
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
                  {selectedAnswer === correctAnswer ? (
                    <span className="text-emerald-300">✓ Correct answer selected.</span>
                  ) : (
                    <span className="text-amber-300">
                      Correct answer: <strong>{correctAnswer || "Not provided"}</strong>
                    </span>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      <SubmitForm
        onSubmit={() => setSubmitted(true)}
        isValid={isComplete}
        pending={false}
      >
        <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-300">Progress</p>
            <p className="text-xl font-bold text-white">
              {answeredCount} / {questions.length} answered
            </p>
          </div>
          {submitted && (
            <div className="text-right">
              <p className="text-sm text-slate-300">Final result</p>
              <p className="text-2xl font-black text-white">
                {score} / {questions.length}
              </p>
            </div>
          )}
        </div>
      </SubmitForm>
    </section>
  );
}
