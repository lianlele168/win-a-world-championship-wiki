import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Swords, Trophy, Users } from "lucide-react";
import { getPlayerCards } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Best Team Guide 2026",
  description:
    "Build the best Win A World Championship squad with role order, weak-line fixes, reroll priorities, and tournament-ready team structure.",
  alternates: { canonical: "/best-team/" },
};

const roleOrder = [
  {
    title: "1. Reliable scorer",
    body: "Your first tournament-ready card should create goals. Without a scorer, extra defenders only slow losses down.",
  },
  {
    title: "2. Control midfielder",
    body: "Midfield keeps the squad stable across nation and year changes, especially before your card pool is deep.",
  },
  {
    title: "3. Defensive anchor",
    body: "Once you can score, stop cheap goals with a center back or defensive midfielder that fits your shape.",
  },
  {
    title: "4. Keeper and connectors",
    body: "Upgrade keeper and fullbacks after the core is solved, then improve nation-year fit with rerolls.",
  },
];

const faqs = [
  {
    question: "What is the best team structure in Win A World Championship?",
    answer: "Start with one scorer, one control midfielder, one defensive anchor, then improve keeper and connector roles.",
  },
  {
    question: "Should I build around nation or role first?",
    answer: "Build around role first. Nation and year alignment are better once your core cards are strong enough to keep.",
  },
  {
    question: "What is the safest formation for new players?",
    answer: "A balanced 4-3-3 or 4-2-3-1 is usually easier to manage because it protects midfield while keeping enough attacking outlets.",
  },
  {
    question: "When should I spend Team Rerolls?",
    answer: "Spend Team Rerolls after you know which line is weakest. Do not use them on cards you will replace soon.",
  },
  {
    question: "How do codes help build the best team?",
    answer: "Current codes grant Coins and rerolls, giving you enough budget to replace filler cards and improve fit before a tournament push.",
  },
];

export default function BestTeamPage() {
  const cards = getPlayerCards().slice(0, 4);
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Best Team", item: "https://winaworldchampionship.robloxwikihub.com/best-team/" },
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
            <Trophy className="h-4 w-4 text-amber-300" />
            Tournament squad framework
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Best Team Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            A strong team is not just a collection of famous cards. Build a balanced spine first, then use rerolls to align nation and year around cards worth keeping.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          {roleOrder.map((item) => (
            <div key={item.title} className="surface p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-black text-white">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                {item.title}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-lg bg-white py-8 text-slate-950">
          <div className="px-5 sm:px-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Priority cards</p>
                <h2 className="mt-2 text-3xl font-black">Best team spine</h2>
              </div>
              <Link href="/tier-list" className="hidden items-center gap-2 text-sm font-black text-emerald-800 hover:text-emerald-600 sm:inline-flex">
                Full tier list
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cards.map((card) => (
                <div key={card.id} className="rounded-md border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-black">{card.name}</h3>
                    <span className={`rounded px-2 py-1 text-xs font-black tier-${card.tier.toLowerCase()}`}>{card.tier}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{card.rerollAdvice}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <Users className="mb-3 h-7 w-7 text-emerald-300" />
            <h2 className="mb-2 font-black text-white">Score your weak line</h2>
            <p className="text-sm leading-6 text-slate-400">Use the calculator sliders to find whether attack, midfield, defense, or keeper should be fixed first.</p>
          </Link>
          <Link href="/formations" className="surface p-5 hover:border-amber-300/40">
            <ShieldCheck className="mb-3 h-7 w-7 text-emerald-300" />
            <h2 className="mb-2 font-black text-white">Pick a formation</h2>
            <p className="text-sm leading-6 text-slate-400">Match your card roles to 4-3-3, 4-2-3-1, 4-4-2, or a defensive setup.</p>
          </Link>
          <Link href="/reroll-guide" className="surface p-5 hover:border-amber-300/40">
            <Swords className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Spend rerolls carefully</h2>
            <p className="text-sm leading-6 text-slate-400">A good-enough S/A core with reroll reserve beats a half-finished perfect chase.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
