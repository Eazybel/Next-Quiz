
// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
              Q
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              Next<span className="text-indigo-600">Quiz</span>
            </span>
          </Link>

          {/* Primary Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              Explore Quizzes
            </Link>
            <Link 
              href="/leaderboard" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              Leaderboard
            </Link>
            <Link 
              href="/dashboard" 
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              My Activity
            </Link>
          </nav>
        </div>

        {/* Right Actions (Profile / Auth) */}
        <div className="flex items-center gap-3">
          <Link 
            href="/login" 
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-100 transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}
