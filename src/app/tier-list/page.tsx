import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, RotateCcw, ShieldCheck, Swords, Trophy } from "lucide-react";
import { getPlayerCards } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Tier List - Best Card Roles 2026",
  description:
    "Win A World Championship tier list for card archetypes, keep-or-reroll decisions, best roles, and squad upgrade priorities.",
  alternates: { canonical: "/tier-list" },
};

const faqs = [
  {
    question: "Who is S-tier in Win A World Championship?",
    answer:
      "Because the public game pages do not expose a complete official card stat table, this tier list ranks card archetypes. Elite Finishers and Control Midfielders are the safest S-tier foundations.",
  },
  {
    question: "Should I reroll a good defender for a famous attacker?",
    answer:
      "Not automatically. If your attack already scores, an Anchor Defender can be more valuable than another forward.",
  },
  {
    question: "Is nation and year fit more important than card role?",
    answer:
      "Role comes first. Once your core roles are stable, use Team Rerolls and Year Rerolls to improve fit.",
  },
  {
    question: "What should beginners keep first?",
    answer:
      "Keep one scorer, one control midfielder, and one reliable defender before spending rerolls on smaller improvements.",
  },
  {
    question: "Will this page be updated with exact cards later?",
    answer:
      "Yes. The structure is ready for exact player-card entries once reliable public data is available.",
  },
];

const tierOrder = ["S", "A", "B", "C", "D"];

export default function TierListPage() {
  const cards = getPlayerCards();
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Tier List", item: "https://winaworldchampionship.robloxwikihub.com/tier-list/" },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-emerald-100">
            <Swords className="h-4 w-4 text-emerald-300" />
            Keep or reroll framework
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Win A World Championship Tier List
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page ranks card roles and squad archetypes based on public mechanics: spin cards, pick the best players, open packs, upgrade a squad, and compete through tournaments.
          </p>
        </section>

        <section className="mb-9 rounded-lg border border-amber-300/25 bg-amber-300/10 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
            <p className="text-sm leading-7 text-amber-50">
              No reliable public source currently exposes the full hidden player-card stat table. This tier list is intentionally framed as an archetype guide so it does not invent exact player ratings.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          {tierOrder.map((tier) => {
            const tierCards = cards.filter((card) => card.tier === tier);
            if (tierCards.length === 0) return null;

            return (
              <div key={tier} className="surface p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-md text-lg font-black tier-${tier.toLowerCase()}`}>
                    {tier}
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-white">{tier}-Tier Card Roles</h2>
                    <p className="text-xs text-slate-400">Sorted by practical reroll priority.</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {tierCards.map((card) => (
                    <Link
                      key={card.id}
                      href={`/tier-list/${card.slug}`}
                      className="rounded-md border border-white/10 bg-white/5 p-4 transition hover:border-emerald-300/50"
                    >
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="font-black text-white">{card.name}</h3>
                        <span className="font-mono text-xs font-black text-amber-200">{card.priority}/100</span>
                      </div>
                      <p className="mb-3 text-sm leading-6 text-slate-300">{card.description}</p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {card.bestFor.map((tag) => (
                          <span key={tag} className="rounded border border-white/10 bg-slate-950 px-2 py-1 text-[11px] font-bold text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-black text-emerald-200">
                        Full role notes
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <RotateCcw className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Calculate reroll reserve</h2>
            <p className="text-sm leading-6 text-slate-400">Use the calculator before replacing B-tier cards.</p>
          </Link>
          <Link href="/best-team" className="surface p-5 hover:border-amber-300/40">
            <Trophy className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Build a best team</h2>
            <p className="text-sm leading-6 text-slate-400">Turn tier roles into an actual squad structure.</p>
          </Link>
          <Link href="/reroll-guide" className="surface p-5 hover:border-amber-300/40">
            <ShieldCheck className="mb-3 h-7 w-7 text-emerald-300" />
            <h2 className="mb-2 font-black text-white">Avoid reroll traps</h2>
            <p className="text-sm leading-6 text-slate-400">Know when to keep a good-enough player.</p>
          </Link>
        </section>
      </div>
    </>
  );
}
