import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Key, PackageOpen, RotateCcw, Trophy } from "lucide-react";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Beginner Guide 2026",
  description:
    "Start Win A World Championship on Roblox with a practical beginner path: codes, packs, first team roles, rerolls, and tournament preparation.",
  alternates: { canonical: "/beginner-guide/" },
};

const steps = [
  {
    title: "Redeem current codes first",
    body: "Codes give the fastest early budget. Use the current Roblox-listed codes before judging your first squad.",
    href: "/codes",
    icon: Key,
  },
  {
    title: "Open packs for a basic spine",
    body: "Aim for one scorer, one midfielder, and one defender before spending rerolls on fine-tuning.",
    href: "/packs-guide",
    icon: PackageOpen,
  },
  {
    title: "Use rerolls only on keepers",
    body: "Team and Year Rerolls are more valuable on cards you plan to keep through multiple tournaments.",
    href: "/reroll-guide",
    icon: RotateCcw,
  },
  {
    title: "Enter cups with a balanced shape",
    body: "Pick a formation that covers your weakest line instead of forcing an all-attack setup too early.",
    href: "/formations",
    icon: Trophy,
  },
];

const faqs = [
  {
    question: "What should beginners do first in Win A World Championship?",
    answer: "Redeem current codes, open enough packs to build a basic squad spine, then save rerolls for cards worth keeping.",
  },
  {
    question: "Should beginners skip the tutorial?",
    answer: "You can skip or complete it, but codes become useful only after the game menu is available.",
  },
  {
    question: "What is the first good team goal?",
    answer: "Build one scorer, one control midfielder, one defensive anchor, and a formation that does not expose your weakest line.",
  },
  {
    question: "Should I use all rerolls immediately?",
    answer: "No. Keep a reserve so you can fix one bad slot before a tournament run.",
  },
  {
    question: "Which page should I use after this guide?",
    answer: "Use the calculator to plan pack openings and rerolls based on your current resources.",
  },
];

export default function BeginnerGuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Beginner Guide", item: "https://winaworldchampionship.robloxwikihub.com/beginner-guide/" },
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
            <CheckCircle2 className="h-4 w-4 text-amber-300" />
            First hour roadmap
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Beginner Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            The game rewards patient team building. Your first goal is not a perfect squad; it is a playable core that turns free code rewards into tournament progress.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Link key={step.title} href={step.href} className="surface p-6 hover:border-amber-300/40">
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-amber-300" />
                  <span className="font-mono text-sm font-black text-emerald-200">0{index + 1}</span>
                </div>
                <h2 className="mb-3 text-xl font-black text-white">{step.title}</h2>
                <p className="mb-4 text-sm leading-7 text-slate-300">{step.body}</p>
                <span className="inline-flex items-center gap-2 text-xs font-black text-emerald-200">
                  Open guide
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </section>

        <section className="surface p-6">
          <h2 className="mb-4 text-2xl font-black text-white">Beginner mistakes to avoid</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Spending rerolls before you know which cards are keepers.",
              "Opening packs for fame instead of fixing the weakest line.",
              "Entering cups with no reroll reserve left.",
            ].map((mistake) => (
              <div key={mistake} className="rounded-md border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                {mistake}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
