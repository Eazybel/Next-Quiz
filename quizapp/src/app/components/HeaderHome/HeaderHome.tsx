import Link from "next/link";

export default function HeaderHome() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-black text-white shadow-lg shadow-indigo-900/40">
            Q
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-white">Next</span>
            <span className="ml-1 text-xl font-black tracking-tight text-indigo-400">Quiz</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
            Explore
          </Link>
          <Link href="/#categories" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
            Categories
          </Link>
        </nav>

        <Link
          href="/#categories"
          className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:bg-indigo-500"
        >
          Play now
        </Link>
      </div>
    </header>
  );
}
