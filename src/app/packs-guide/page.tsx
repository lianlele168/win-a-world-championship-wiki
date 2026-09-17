import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Coins, PackageOpen, ShieldAlert } from "lucide-react";
import { getPacks } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Packs Guide - Coin Spending Strategy",
  description:
    "Learn when to open packs, save Coins, and use code rewards in Win A World Championship without wasting rerolls on temporary cards.",
  alternates: { canonical: "/packs-guide" },
};

const faqs = [
  {
    question: "Should I open packs immediately after redeeming codes?",
    answer: "Open enough packs to remove weak filler, but keep a reserve for future updates and tournament fixes.",
  },
  {
    question: "What should I target from packs first?",
    answer: "Target one scorer and one midfield connector first, then defense and keeper.",
  },
  {
    question: "Should I spend rerolls before opening packs?",
    answer: "Usually no. Open packs to improve the base card first, then use rerolls on cards you plan to keep.",
  },
  {
    question: "Are pack costs fixed?",
    answer: "They can change by update or progression, so use the calculator with the cost visible in your own server.",
  },
  {
    question: "What is the biggest pack mistake?",
    answer: "Spending every coin chasing one famous card while your weakest squad line remains unsolved.",
  },
];

export default function PacksGuidePage() {
  const packs = getPacks();
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Packs Guide", item: "https://winaworldchampionship.robloxwikihub.com/packs-guide/" },
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
            <PackageOpen className="h-4 w-4 text-emerald-300" />
            Coin spend planning
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Packs Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Packs are how you create new upgrade chances, but rerolls decide whether good pulls become tournament-ready. Spend coins in cycles instead of dumping your full bank.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          {packs.map((pack) => (
            <div key={pack.id} className="surface p-6">
              <span className="mb-3 inline-flex rounded-full bg-amber-300/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-100">
                {pack.stage}
              </span>
              <h2 className="mb-3 text-xl font-black text-white">{pack.name}</h2>
              <p className="mb-4 text-sm leading-7 text-slate-300">{pack.goal}</p>
              <div className="space-y-3 text-sm">
                <p className="rounded-md border border-emerald-300/20 bg-emerald-500/10 p-3 text-emerald-50">
                  <Coins className="mr-2 inline h-4 w-4 text-emerald-300" />
                  {pack.coinRule}
                </p>
                <p className="rounded-md border border-rose-300/20 bg-rose-500/10 p-3 text-rose-50">
                  <ShieldAlert className="mr-2 inline h-4 w-4 text-rose-200" />
                  {pack.risk}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="surface p-6">
          <h2 className="mb-4 text-2xl font-black text-white">Pack cycle checklist</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {["Redeem active codes", "Enter pack cost in calculator", "Open only for weakest line", "Save rerolls for keepers"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/5 p-4 text-sm font-bold text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <Link href="/calculator" className="btn-primary mt-6">
            Calculate pack budget
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>
    </>
  );
}
