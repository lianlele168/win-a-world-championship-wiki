import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";
import { getPlayerCards } from "@/lib/data";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

const cards = getPlayerCards();

export function generateStaticParams() {
  return cards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = cards.find((item) => item.slug === slug);

  if (!card) {
    return { title: "Card Role Not Found" };
  }

  return {
    title: `${card.name} - Win A World Championship Tier List`,
    description: `${card.name} role notes, best uses, keep signals, and reroll advice for Win A World Championship on Roblox.`,
    alternates: { canonical: `/tier-list/${card.slug}/` },
  };
}

export default async function TierDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const card = cards.find((item) => item.slug === slug);

  if (!card) notFound();

  const faqs = [
    {
      question: `Is ${card.name} worth keeping in Win A World Championship?`,
      answer: card.rerollAdvice,
    },
    {
      question: `What is ${card.name} best for?`,
      answer: `${card.name} is best for ${card.bestFor.join(", ")}.`,
    },
    {
      question: `What tier is ${card.name}?`,
      answer: `${card.name} is ranked ${card.tier}-tier in this archetype tier list.`,
    },
    {
      question: "Does this page claim exact hidden player stats?",
      answer: "No. It ranks role archetypes and visible decision signals, not hidden stat values.",
    },
    {
      question: "When should I reroll this role?",
      answer: card.rerollAdvice,
    },
  ];

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Tier List", item: "https://winaworldchampionship.robloxwikihub.com/tier-list/" },
      { name: card.name, item: `https://winaworldchampionship.robloxwikihub.com/tier-list/${card.slug}/` },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="page-shell py-10">
        <Link href="/tier-list" className="mb-7 inline-flex items-center gap-2 text-sm font-black text-amber-200 hover:text-amber-100">
          <ArrowLeft className="h-4 w-4" />
          Back to tier list
        </Link>

        <section className="grid gap-7 lg:grid-cols-[1fr_360px]">
          <div className="surface p-6">
            <span className={`mb-5 inline-flex rounded px-3 py-1 text-sm font-black tier-${card.tier.toLowerCase()}`}>
              {card.tier}-Tier
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white">{card.name}</h1>
            <p className="mt-4 text-base leading-7 text-slate-300">{card.description}</p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/5 p-5">
                <h2 className="mb-3 flex items-center gap-2 font-black text-white">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  Keep signals
                </h2>
                <ul className="space-y-2 text-sm text-slate-300">
                  {card.signals.map((signal) => (
                    <li key={signal} className="flex gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md border border-white/10 bg-white/5 p-5">
                <h2 className="mb-3 flex items-center gap-2 font-black text-white">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  Best for
                </h2>
                <div className="flex flex-wrap gap-2">
                  {card.bestFor.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-xs font-bold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-md border border-amber-300/25 bg-amber-300/10 p-5">
              <h2 className="mb-2 flex items-center gap-2 font-black text-white">
                <RotateCcw className="h-5 w-5 text-amber-200" />
                Reroll advice
              </h2>
              <p className="text-sm leading-7 text-slate-300">{card.rerollAdvice}</p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="surface p-5">
              <h2 className="mb-4 font-black text-white">Role snapshot</h2>
              <div className="space-y-3 text-sm">
                <p className="flex justify-between gap-3 border-b border-white/10 pb-2">
                  <span className="text-slate-400">Role</span>
                  <strong className="text-white">{card.role}</strong>
                </p>
                <p className="flex justify-between gap-3 border-b border-white/10 pb-2">
                  <span className="text-slate-400">Priority</span>
                  <strong className="font-mono text-amber-200">{card.priority}/100</strong>
                </p>
                <p className="flex justify-between gap-3">
                  <span className="text-slate-400">Tier</span>
                  <strong className="text-white">{card.tier}</strong>
                </p>
              </div>
            </div>

            <Link href="/calculator" className="btn-primary w-full">
              Calculate reroll budget
            </Link>
            <Link href="/best-team" className="btn-secondary w-full">
              Build full team
            </Link>
          </aside>
        </section>
      </main>
    </>
  );
}
