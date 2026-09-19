import CategoryNav from "@/app/components/CategoryNav/CategoryNav";

export default function Home() {
  return (
    // main page
    <main className="min-h-[calc(100vh-80px)] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)]">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
              Challenge yourself
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sharpen your brain with a premium quiz experience .
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
              Pick a category, choose your difficulty, and test your knowledge with fast, focused rounds built for learning and fun.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#categories"
                className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition hover:bg-indigo-500"
              >
                Start a quiz
              </a>
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200">
                10 questions per round
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Skill</p>
                <p className="mt-3 text-2xl font-black text-white">Fast</p>
              </div>
              <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Focus</p>
                <p className="mt-3 text-2xl font-black text-white">Deep</p>
              </div>
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Fun</p>
                <p className="mt-3 text-2xl font-black text-white">Daily</p>
              </div>
            </div>
          </div>
        </div>

        <div id="categories" className="mt-14">
          <CategoryNav />
        </div>
      </section>
    </main>
  );
}
