import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Trophy } from "lucide-react";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: "About Win A World Championship Wiki",
  description:
    "About this unofficial Win A World Championship Roblox wiki, including data sources, update approach, and disclaimer.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="page-shell py-10">
      <section className="max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-emerald-100">
          <Trophy className="h-4 w-4 text-amber-300" />
          Unofficial fan site
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          About This Wiki
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          This is an independent, fan-made companion site for {config.game.name} on Roblox. It focuses on practical tools: working codes, reroll budget planning, card-role tiering, and beginner-friendly squad decisions.
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="surface p-5">
          <h2 className="mb-2 font-black text-white">What we track</h2>
          <p className="text-sm leading-6 text-slate-400">Public Roblox API fields, current game description codes, public source conflicts, and guide notes that can be updated quickly.</p>
        </div>
        <div className="surface p-5">
          <h2 className="mb-2 font-black text-white">What we avoid</h2>
          <p className="text-sm leading-6 text-slate-400">We do not invent hidden player stats, fake pack odds, or pretend uncertain codes are verified.</p>
        </div>
        <div className="surface p-5">
          <h2 className="mb-2 font-black text-white">Game owner</h2>
          <p className="text-sm leading-6 text-slate-400">{config.game.name} is by {config.game.developer}. This site is not affiliated with or endorsed by the developer or Roblox.</p>
        </div>
      </section>

      <section className="mt-10 surface p-6">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
          <ShieldCheck className="h-6 w-6 text-emerald-300" />
          Source transparency
        </h2>
        <p className="mb-5 text-sm leading-7 text-slate-300">
          Code pages for fast-moving Roblox games change often. This wiki stores source names on each code entry and keeps conflicting older codes in a separate needs-check state.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/updates" className="btn-primary">View update sources</Link>
          <a href={config.game.robloxUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Open Roblox page
            <ExternalLink className="h-4 w-4 text-amber-300" />
          </a>
        </div>
      </section>
    </main>
  );
}
