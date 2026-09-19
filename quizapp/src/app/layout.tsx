import type { Metadata } from "next";
import "./globals.css";
import HeaderHome from "@/app/components/HeaderHome/HeaderHome";

export const metadata: Metadata = {
  title: "NextQuiz",
  description: "Modern quiz app built for quick category-based practice.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <HeaderHome />
        {children}
      </body>
    </html>
  );
}
