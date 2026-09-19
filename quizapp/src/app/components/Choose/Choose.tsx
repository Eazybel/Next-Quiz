"use client";

type Props = {
  name: string;
  text: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Choose({ name, text, value, checked, onChange }: Props) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left transition ${
        checked
          ? "border-indigo-400 bg-indigo-500/10 text-white shadow-lg shadow-indigo-900/20"
          : "border-white/10 bg-slate-950/40 text-slate-200 hover:border-indigo-400/50 hover:bg-slate-800/80"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-indigo-500"
      />
      <span className="text-sm font-medium leading-relaxed sm:text-base">{text}</span>
    </label>
  );
}