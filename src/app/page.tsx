import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Key,
  PackageOpen,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
} from "lucide-react";
import config from "@/data/game.config.json";
import { getActiveCodes, getCodeRewardTotals, getNeedsCheckCodes, getPacks, getPlayerCards } from "@/lib/data";
import { buildFAQSchema, buildVideoGameSchema, buildWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Wiki - Codes, Calculator & Best Team 2026",
  description:
    "Build a stronger Roblox football nation with working Win A World Championship codes, a reroll budget calculator, card tier list, pack strategy, and beginner guides.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    question: "What is Win A World Championship on Roblox?",
    answer:
      "Win A World Championship is a Roblox sports drafting game by Black Barn Studios where players build a football nation, spin cards, open packs, upgrade a squad, and compete through tournaments.",
  },
  {
    question: "What are the current official Win A World Championship codes?",
    answer:
      "The current codes still listed in the Roblox description are MEMBERS200K, DAILY, VISIT5M, LIKES10K, CCU5K, and INDEX.",
  },
  {
    question: "What should I spend code rewards on first?",
    answer:
      "Use the free coins and rerolls to fix your weakest squad line first. A balanced midfield plus one reliable scorer is usually safer than chasing only famous attackers.",
  },
  {
    question: "Is this an official Win A World Championship wiki?",
    answer:
      "No. This is an unofficial fan-made companion site that tracks public Roblox data, public code sources, and practical strategy notes.",
  },
  {
    question: "Does the tier list use official hidden stats?",
    answer:
      "No. The tier list avoids claiming hidden stat values and ranks card archetypes by visible role fit, squad balance, and reroll priority.",
  },
];

export default function HomePage() {
  const activeCodes = getActiveCodes();
  const needsCheckCodes = getNeedsCheckCodes();
  const totals = getCodeRewardTotals();
  const cards = getPlayerCards();
  const sTierCards = cards.filter((card) => card.tier === "S");
  const packs = getPacks();
  const schemas = [buildWebsiteSchema(), buildVideoGameSchema(), buildFAQSchema(faqs)];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="hero-bg border-b border-white/10">
        <div className="page-shell grid min-h-[680px] items-center gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-slate-950/70 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
              <Trophy className="h-4 w-4 text-amber-300" />
              {config.game.currentVersion}
            </div>

            <h1 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Win A World Championship Wiki
            </h1>
            <p className="max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">
              Claim current Roblox codes, calculate your reroll budget, and plan the strongest football nation before entering the next tournament bracket.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/codes" className="btn-primary">
                <Key className="h-5 w-5" />
                Copy Working Codes
              </Link>
              <Link href="/calculator" className="btn-secondary">
                <Calculator className="h-5 w-5 text-emerald-300" />
                Open Calculator
              </Link>
              <Link href="/tier-list" className="btn-secondary">
                <Swords className="h-5 w-5 text-amber-300" />
                View Tier List
              </Link>
            </div>

            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Visits</span>
                <span className="mt-1 block font-mono text-2xl font-black text-white">{config.stats.visits}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Playing</span>
                <span className="mt-1 block font-mono text-2xl font-black text-emerald-200">{config.stats.onlineNow}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Active Codes</span>
                <span className="mt-1 block font-mono text-2xl font-black text-amber-200">{activeCodes.length}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Favorites</span>
                <span className="mt-1 block font-mono text-2xl font-black text-white">{config.stats.favorites}</span>
              </div>
            </div>
          </div>

          <div className="surface p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-black text-white">Code Reward Bank</h2>
                <p className="text-xs font-semibold text-slate-400">Official-current codes only</p>
              </div>
              <span className="badge-active">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Source tracked
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-emerald-100/100">Coins</span>
                <strong className="mt-1 block font-mono text-3xl text-white">{totals.coins.toLocaleString()}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-emerald-100/100">Team Rerolls</span>
                <strong className="mt-1 block font-mono text-3xl text-white">{totals.teamRerolls}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-emerald-100/100">Year Rerolls</span>
                <strong className="mt-1 block font-mono text-3xl text-white">{totals.yearRerolls}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-emerald-100/100">Tokens</span>
                <strong className="mt-1 block font-mono text-3xl text-white">{totals.tokens}</strong>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {activeCodes.slice(0, 4).map((code) => (
                <Link
                  key={code.code}
                  href="/codes"
                  className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3 transition hover:border-amber-300/50"
                >
                  <span>
                    <span className="block font-mono text-sm font-black text-amber-200">{code.code}</span>
                    <span className="block text-xs text-slate-400">{code.reward}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-emerald-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <div className="page-shell pt-8">
        <AuthorCard />

        {/* VISUAL GAMEPLAY SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="rounded-2xl overflow-hidden border border-amber-900/60 bg-amber-950/40 p-4">
            <Image
              src="/images/championship-header.webp"
              alt="Win a World Championship Official Game Icon"
              width={512}
              height={512}
              className="rounded-xl object-cover w-full h-56 border border-amber-800/40"
              priority
            />
            <p className="text-xs text-amber-300 mt-2.5 text-center font-medium">
              Figure 1: Official Win a World Championship Game Icon by Black Barn Studios.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-amber-900/60 bg-amber-950/40 p-4">
            <Image
              src="/images/championship-gameplay.webp"
              alt="Win a World Championship Tournament Match"
              width={768}
              height={432}
              className="rounded-xl object-cover w-full h-56 border border-amber-800/40"
            />
            <p className="text-xs text-amber-300 mt-2.5 text-center font-medium">
              Figure 2: Active World Cup Tournament Arena & Squad Draft Pitch.
            </p>
          </div>
        </div>
      </div>

      <section className="page-shell py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          <Link href="/calculator" className="surface p-6 transition hover:border-amber-300/40">
            <Calculator className="mb-4 h-9 w-9 text-amber-300" />
            <h2 className="mb-2 text-xl font-black text-white">Reroll Budget Calculator</h2>
            <p className="text-sm leading-6 text-slate-300">
              Add your current coins, code rewards, pack cost, and squad weaknesses to see how many pack opens and rerolls you can safely spend.
            </p>
          </Link>
          <Link href="/tier-list" className="surface p-6 transition hover:border-amber-300/40">
            <Swords className="mb-4 h-9 w-9 text-emerald-300" />
            <h2 className="mb-2 text-xl font-black text-white">Card Archetype Tier List</h2>
            <p className="text-sm leading-6 text-slate-300">
              Rank keep-or-reroll decisions by squad role, not fake hidden stats. Start with elite finishers and control midfielders.
            </p>
          </Link>
          <Link href="/best-team" className="surface p-6 transition hover:border-amber-300/40">
            <Trophy className="mb-4 h-9 w-9 text-amber-300" />
            <h2 className="mb-2 text-xl font-black text-white">Best Team Builder</h2>
            <p className="text-sm leading-6 text-slate-300">
              Use a simple role order for attack, midfield, defense, keeper, bench, and nation-year fit before a cup run.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 text-slate-950">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Priority keeps</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">S-tier squad foundations</h2>
            </div>
            <Link href="/tier-list" className="inline-flex items-center gap-2 text-sm font-black text-emerald-800 hover:text-emerald-600">
              Full tier list
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {sTierCards.map((card) => (
              <div key={card.id} className="surface-light p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-black">{card.name}</h3>
                  <span className={`rounded px-2 py-1 text-xs font-black tier-${card.tier.toLowerCase()}`}>{card.tier} Tier</span>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-700">{card.description}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {card.bestFor.map((item) => (
                    <span key={item} className="rounded-md border border-emerald-900/10 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-900">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Fresh code logic</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Why this site splits code confidence</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The Roblox description currently lists six codes. Some large code pages disagree on older codes, so this wiki separates official-current codes from needs-check codes instead of pretending every source matches.
            </p>
            <Link href="/updates" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-200 hover:text-amber-100">
              Review sources and conflicts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="surface p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="field-tile p-4">
                <Key className="mb-3 h-6 w-6 text-amber-300" />
                <strong className="block text-2xl text-white">{activeCodes.length} official-current</strong>
                <span className="text-sm text-slate-300">Listed in the live Roblox description.</span>
              </div>
              <div className="rounded-md border border-amber-300/25 bg-amber-300/10 p-4">
                <RotateCcw className="mb-3 h-6 w-6 text-amber-200" />
                <strong className="block text-2xl text-white">{needsCheckCodes.length} needs-check</strong>
                <span className="text-sm text-slate-300">Useful long-tail terms, marked cautiously.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {packs.map((pack) => (
            <Link key={pack.id} href="/packs-guide" className="surface p-5 transition hover:border-emerald-300/40">
              <PackageOpen className="mb-3 h-6 w-6 text-emerald-300" />
              <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-amber-200">{pack.stage}</span>
              <h3 className="mb-2 text-lg font-black text-white">{pack.name}</h3>
              <p className="text-sm leading-6 text-slate-300">{pack.goal}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/100 py-14">
        <div className="page-shell max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-emerald-300" />
            <h2 className="text-2xl font-black text-white">Quick FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="surface p-5">
                <h3 className="mb-2 flex items-start gap-2 text-sm font-black text-white">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  {faq.question}
                </h3>
                <p className="pl-6 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
