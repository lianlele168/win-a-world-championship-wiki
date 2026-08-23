import type { Metadata } from "next";
import Link from "next/link";
import { RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { getCodeRewardTotals } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Reroll Guide - Team & Year Priorities",
  description:
    "Win A World Championship reroll guide for Team Rerolls, Year Rerolls, reserve targets, and when to keep or reroll cards.",
  alternates: { canonical: "/reroll-guide/" },
};

const rules = [
  "Reroll roles before rerolling cosmetic fit. A useful midfielder with imperfect fit beats a perfect-link filler.",
  "Use Team Rerolls on cards you expect to keep through several cups.",
  "Use Year Rerolls after the card role is solved, not before.",
  "Keep a small reserve before finals so one bad slot does not end the run.",
  "Do not chase two upgrades at the same time. Pick attack, midfield, defense, or keeper first.",
];

const faqs = [
  {
    question: "What is the best way to use Team Rerolls?",
    answer: "Use Team Rerolls on high-priority cards that are already worth keeping by role.",
  },
  {
    question: "What is the best way to use Year Rerolls?",
    answer: "Use Year Rerolls after your main card role is stable and you want better nation-year fit.",
  },
  {
    question: "How many rerolls do current codes give?",
    answer: "The official-current code set tracked here totals 30 Team Rerolls and 30 Year Rerolls.",
  },
  {
    question: "Should I reroll every B-tier card?",
    answer: "No. Reroll B-tier only if it fails your formation or blocks a more important line upgrade.",
  },
  {
    question: "What is a reroll trap?",
    answer: "A reroll trap is spending rerolls on a card you will soon replace or on a squad line that is not your weakest line.",
  },
];

export default function RerollGuidePage() {
  const totals = getCodeRewardTotals();
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Reroll Guide", item: "https://winaworldchampionship.robloxwikihub.com/reroll-guide/" },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="page-shell py-10">
        <section className="mb-10 grid gap-7 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
              <RotateCcw className="h-4 w-4 text-amber-300" />
              Team and year reroll plan
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Win A World Championship Reroll Guide
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Rerolls are strongest when they protect a card you already want to keep. Use them to finish your squad, not to gamble away every decent pull.
            </p>
          </div>
          <div className="surface p-5">
            <h2 className="mb-4 flex items-center gap-2 font-black text-white">
              <Sparkles className="h-5 w-5 text-amber-300" />
              Current code rerolls
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="field-tile p-4 text-center">
                <span className="text-xs text-slate-300">Team</span>
                <strong className="block font-mono text-3xl text-white">{totals.teamRerolls}</strong>
              </div>
              <div className="field-tile p-4 text-center">
                <span className="text-xs text-slate-300">Year</span>
                <strong className="block font-mono text-3xl text-white">{totals.yearRerolls}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 surface p-6">
          <h2 className="mb-5 text-2xl font-black text-white">Reroll rules</h2>
          <div className="grid gap-3">
            {rules.map((rule, index) => (
              <div key={rule} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-slate-950">{index + 1}</span>
                <p className="text-sm leading-6 text-slate-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <ShieldCheck className="mb-3 h-7 w-7 text-emerald-300" />
            <h2 className="mb-2 font-black text-white">Find spendable rerolls</h2>
            <p className="text-sm leading-6 text-slate-400">The calculator subtracts a reserve target from your current rerolls.</p>
          </Link>
          <Link href="/tier-list" className="surface p-5 hover:border-amber-300/40">
            <RotateCcw className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Know what to keep</h2>
            <p className="text-sm leading-6 text-slate-400">Use role archetypes to avoid wasting rerolls on temporary cards.</p>
          </Link>
          <Link href="/codes" className="surface p-5 hover:border-amber-300/40">
            <Sparkles className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Claim current codes</h2>
            <p className="text-sm leading-6 text-slate-400">Get the latest tracked code rerolls before spending.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
