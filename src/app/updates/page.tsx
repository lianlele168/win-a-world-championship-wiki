import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, RefreshCcw, ShieldCheck } from "lucide-react";
import config from "@/data/game.config.json";
import { getActiveCodes, getExpiredCodes, getNeedsCheckCodes } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Updates & Sources 2026",
  description:
    "Track Win A World Championship update status, Roblox API stats, current codes, conflicting code sources, and wiki data confidence.",
  alternates: { canonical: "/updates/" },
};

const faqs = [
  {
    question: "Where does this wiki get game data?",
    answer: "It uses public Roblox API fields, Rolimon's public tracker, and public code pages from Roblox gaming outlets.",
  },
  {
    question: "Why are code sources split by confidence?",
    answer: "The live Roblox description and some media pages disagree on older codes, so this wiki separates current official codes from needs-check history.",
  },
  {
    question: "When was the game last updated?",
    answer: "The game receives regular updates — the official Roblox experience page lists the latest patch information.",
  },
  {
    question: "Will this page track new patches?",
    answer: "Yes. It is designed as the hub for future update logs, code changes, and new guide pages.",
  },
  {
    question: "Is the wiki official?",
    answer: "No. It is a fan-made site and links to official/public sources for transparency.",
  },
];

export default function UpdatesPage() {
  const active = getActiveCodes();
  const needsCheck = getNeedsCheckCodes();
  const expired = getExpiredCodes();
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Updates", item: "https://winaworldchampionship.robloxwikihub.com/updates/" },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-emerald-100">
            <RefreshCcw className="h-4 w-4 text-emerald-300" />
            Source log
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Updates
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page records what was used to build the wiki: current Roblox API fields, the live game description, and public code sources, re-checked regularly.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-4">
          {[
            ["Playing", config.stats.onlineNow],
            ["Visits", config.stats.visits],
            ["Favorites", config.stats.favorites],
            ["Rating", config.stats.rating],
          ].map(([label, value]) => (
            <div key={label} className="metric-tile">
              <span className="block text-xs font-black uppercase tracking-wide text-slate-400">{label}</span>
              <strong className="mt-1 block font-mono text-2xl text-white">{value}</strong>
            </div>
          ))}
        </section>

        <section className="mb-10 grid gap-5 lg:grid-cols-3">
          <div className="surface p-5">
            <h2 className="mb-2 font-black text-white">Official-current</h2>
            <p className="text-sm text-slate-400">{active.length} codes listed in the live Roblox description.</p>
          </div>
          <div className="surface p-5">
            <h2 className="mb-2 font-black text-white">Needs-check</h2>
            <p className="text-sm text-slate-400">{needsCheck.length} older codes with media-source conflicts.</p>
          </div>
          <div className="surface p-5">
            <h2 className="mb-2 font-black text-white">Reported expired</h2>
            <p className="text-sm text-slate-400">{expired.length} historical codes tracked for search and troubleshooting.</p>
          </div>
        </section>

        <section className="surface p-6">
          <h2 className="mb-5 flex items-center gap-2 text-2xl font-black text-white">
            <ShieldCheck className="h-6 w-6 text-emerald-300" />
            Sources used
          </h2>
          <div className="grid gap-3">
            {config.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-sm font-bold text-slate-200 hover:border-amber-300/40"
              >
                <span>{source.name}</span>
                <ExternalLink className="h-4 w-4 shrink-0 text-amber-300" />
              </a>
            ))}
          </div>
          <Link href="/codes" className="btn-primary mt-6">
            Review code table
          </Link>
        </section>
      </main>
    </>
  );
}
