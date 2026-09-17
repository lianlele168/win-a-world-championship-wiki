import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Swords, Trophy } from "lucide-react";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Formations Guide 2026",
  description:
    "Pick the best Win A World Championship formation for your card roles: 4-3-3, 4-2-3-1, 4-4-2, and defensive tournament setups.",
  alternates: { canonical: "/formations" },
};

const formations = [
  {
    name: "4-3-3",
    bestFor: "Elite finisher plus pace winger",
    strengths: ["Wide pressure", "Fast transitions", "Easy scoring outlets"],
    weakness: "Needs midfield quality or it becomes too open.",
  },
  {
    name: "4-2-3-1",
    bestFor: "Balanced tournament runs",
    strengths: ["Midfield protection", "One clear striker", "Good weak-line coverage"],
    weakness: "Can feel slow if your attacking midfielder is weak.",
  },
  {
    name: "4-4-2",
    bestFor: "Two good attackers but limited midfield stars",
    strengths: ["Simple structure", "Direct chances", "Good for early squads"],
    weakness: "Harder to dominate possession against stronger teams.",
  },
  {
    name: "5-3-2",
    bestFor: "Protecting a lead or underdog runs",
    strengths: ["Defensive stability", "Safer finals", "Reduces weak defender exposure"],
    weakness: "Needs two attackers who can create without many chances.",
  },
];

const faqs = [
  {
    question: "What is the best formation in Win A World Championship?",
    answer: "4-2-3-1 is the safest general formation, while 4-3-3 is better when you have a strong finisher and wide speed.",
  },
  {
    question: "What formation should beginners use?",
    answer: "Beginners should start with 4-3-3 or 4-4-2 because the roles are easy to understand and upgrade.",
  },
  {
    question: "When should I use 5-3-2?",
    answer: "Use 5-3-2 when your defense is the strongest part of the squad or you need to survive tougher finals.",
  },
  {
    question: "Should formation or card tier come first?",
    answer: "Card role comes first. Pick a formation that fits your best cards instead of forcing weak cards into a favorite setup.",
  },
  {
    question: "Can rerolls fix a bad formation?",
    answer: "Rerolls help, but only after the formation matches your strongest roles.",
  },
];

export default function FormationsPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Formations", item: "https://winaworldchampionship.robloxwikihub.com/formations/" },
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
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Formation fit guide
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Formations
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Pick your formation from the cards you have, not the cards you wish you had. These setups focus on role fit and tournament stability.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {formations.map((formation) => (
            <div key={formation.name} className="surface p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="font-mono text-3xl font-black text-amber-200">{formation.name}</h2>
                <Trophy className="h-7 w-7 text-amber-300" />
              </div>
              <p className="mb-4 text-sm font-bold text-emerald-100">{formation.bestFor}</p>
              <div className="mb-4 grid gap-2">
                {formation.strengths.map((strength) => (
                  <span key={strength} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    {strength}
                  </span>
                ))}
              </div>
              <p className="rounded-md border border-rose-300/20 bg-rose-500/10 p-3 text-sm leading-6 text-rose-50">
                Watch out: {formation.weakness}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <Swords className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Test your weak line</h2>
            <p className="text-sm leading-6 text-slate-400">Use the calculator to pick a formation around your current lowest line.</p>
          </Link>
          <Link href="/best-team" className="surface p-5 hover:border-amber-300/40">
            <Trophy className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Build the full squad</h2>
            <p className="text-sm leading-6 text-slate-400">Turn formation fit into a best-team upgrade order.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-amber-200">
              Open guide
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
