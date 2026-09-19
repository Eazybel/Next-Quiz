"use client";

type Props = {
  text: string;
  number: number;
};

export default function Question({ text, number }: Props) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center justify-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
        Question {number}
      </div>
      <h2 className="text-xl font-bold leading-relaxed text-white sm:text-2xl">{text}</h2>
    </div>
  );
}