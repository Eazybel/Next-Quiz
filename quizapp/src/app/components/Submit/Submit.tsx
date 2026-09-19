"use client";

import type { FormEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onSubmit?: () => void;
  isValid: boolean;
  pending: boolean;
};

export default function SubmitForm({ children, onSubmit, isValid, pending }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      {children}
      <button
        type="submit"
        disabled={!isValid || pending}
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {pending ? "Checking answers..." : "Submit answers"}
      </button>
    </form>
  );
}