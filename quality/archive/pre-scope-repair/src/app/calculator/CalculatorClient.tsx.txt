"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Coins,
  Gauge,
  Goal,
  PackageOpen,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import codesData from "@/data/codes.json";

const weakLineAdvice = {
  attack: {
    title: "Fix attack first",
    body: "Prioritize an elite finisher or pace winger before spending rerolls on year alignment.",
    formation: "4-3-3 or 4-2-3-1",
  },
  midfield: {
    title: "Fix midfield first",
    body: "A control midfielder stabilizes possession and makes imperfect attackers more usable.",
    formation: "4-3-3 or 4-4-2",
  },
  defense: {
    title: "Fix defense first",
    body: "Target an anchor defender before entering longer tournament runs.",
    formation: "4-2-3-1 or 5-3-2",
  },
  keeper: {
    title: "Fix keeper last unless it is critical",
    body: "A keeper upgrade is valuable, but not before you have one scorer and a stable midfield.",
    formation: "4-2-3-1",
  },
};

type WeakLine = keyof typeof weakLineAdvice;

function NumberInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block rounded-md border border-white/10 bg-white/5 p-4">
      <span className="mb-2 block text-xs font-black uppercase tracking-wide text-slate-400">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-11 w-full rounded-md border border-white/10 bg-slate-950 px-3 font-mono text-sm font-bold text-white focus:border-amber-300/100 focus:outline-none"
      />
    </label>
  );
}

function RatingSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span className="text-white">{label}</span>
        <span className="font-mono text-amber-200">{value}/100</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-amber-300"
      />
    </div>
  );
}

export default function CalculatorClient() {
  const [includeCodes, setIncludeCodes] = useState(true);
  const [currentCoins, setCurrentCoins] = useState(0);
  const [currentTeamRerolls, setCurrentTeamRerolls] = useState(0);
  const [currentYearRerolls, setCurrentYearRerolls] = useState(0);
  const [packCost, setPackCost] = useState(2500);
  const [attack, setAttack] = useState(50);
  const [midfield, setMidfield] = useState(50);
  const [defense, setDefense] = useState(50);
  const [keeper, setKeeper] = useState(50);
  const [preferredRisk, setPreferredRisk] = useState<"conserve" | "balanced" | "spend">("balanced");

  const codeTotals = useMemo(() => {
    return codesData
      .filter((code) => code.status === "active")
      .reduce(
        (sum, code) => ({
          coins: sum.coins + code.coins,
          teamRerolls: sum.teamRerolls + code.teamRerolls,
          yearRerolls: sum.yearRerolls + code.yearRerolls,
          tokens: sum.tokens + code.tokens,
        }),
        { coins: 0, teamRerolls: 0, yearRerolls: 0, tokens: 0 },
      );
  }, []);

  const results = useMemo(() => {
    const rewardCoins = includeCodes ? codeTotals.coins : 0;
    const rewardTeam = includeCodes ? codeTotals.teamRerolls : 0;
    const rewardYear = includeCodes ? codeTotals.yearRerolls : 0;
    const totalCoins = Math.max(0, currentCoins) + rewardCoins;
    const safePackCost = Math.max(1, packCost);
    const packOpens = Math.floor(totalCoins / safePackCost);
    const remainingCoins = totalCoins % safePackCost;
    const totalTeamRerolls = Math.max(0, currentTeamRerolls) + rewardTeam;
    const totalYearRerolls = Math.max(0, currentYearRerolls) + rewardYear;
    const ratings = { attack, midfield, defense, keeper };
    const weakest = (Object.entries(ratings).sort((a, b) => a[1] - b[1])[0][0] || "midfield") as WeakLine;
    const averageSquad = Math.round((attack + midfield + defense + keeper) / 4);
    const reserveTarget = preferredRisk === "conserve" ? 12 : preferredRisk === "balanced" ? 7 : 3;
    const spendableTeamRerolls = Math.max(0, totalTeamRerolls - reserveTarget);
    const spendableYearRerolls = Math.max(0, totalYearRerolls - reserveTarget);
    const readiness = Math.min(
      100,
      Math.round(averageSquad * 0.55 + Math.min(25, packOpens * 2) + Math.min(20, (totalTeamRerolls + totalYearRerolls) * 0.4)),
    );

    return {
      totalCoins,
      packOpens,
      remainingCoins,
      totalTeamRerolls,
      totalYearRerolls,
      spendableTeamRerolls,
      spendableYearRerolls,
      weakest,
      averageSquad,
      reserveTarget,
      readiness,
      advice: weakLineAdvice[weakest],
    };
  }, [
    attack,
    codeTotals,
    currentCoins,
    currentTeamRerolls,
    currentYearRerolls,
    defense,
    includeCodes,
    keeper,
    midfield,
    packCost,
    preferredRisk,
  ]);

  const reset = () => {
    setIncludeCodes(true);
    setCurrentCoins(0);
    setCurrentTeamRerolls(0);
    setCurrentYearRerolls(0);
    setPackCost(2500);
    setAttack(50);
    setMidfield(50);
    setDefense(50);
    setKeeper(50);
    setPreferredRisk("balanced");
  };

  return (
    <div className="page-shell py-10">
      <section className="mb-10 max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
          <Calculator className="h-4 w-4 text-amber-300" />
          Interactive planning tool
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Win A World Championship Calculator
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Plan how far the current code rewards can carry your squad. This calculator handles budget math and weak-line priority, not hidden pack odds.
        </p>
      </section>

      <section className="grid gap-7 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <div className="surface p-5">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Coins className="h-5 w-5 text-amber-300" />
                Resource inputs
              </h2>
              <button onClick={reset} className="btn-quiet">
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <div className="mb-4 rounded-md border border-emerald-300/25 bg-emerald-500/10 p-4">
              <label className="flex cursor-pointer items-center justify-between gap-4">
                <span>
                  <span className="block text-sm font-black text-white">Include official-current code rewards</span>
                  <span className="block text-xs text-slate-400">
                    Adds {codeTotals.coins.toLocaleString()} Coins, {codeTotals.teamRerolls} Team Rerolls, {codeTotals.yearRerolls} Year Rerolls, and {codeTotals.tokens} Tokens.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={includeCodes}
                  onChange={(event) => setIncludeCodes(event.target.checked)}
                  className="h-5 w-5 accent-amber-300"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <NumberInput label="Current coins" value={currentCoins} min={0} max={999999} step={500} onChange={setCurrentCoins} />
              <NumberInput label="Pack coin cost in your server" value={packCost} min={1} max={50000} step={100} onChange={setPackCost} />
              <NumberInput label="Current Team Rerolls" value={currentTeamRerolls} min={0} max={999} onChange={setCurrentTeamRerolls} />
              <NumberInput label="Current Year Rerolls" value={currentYearRerolls} min={0} max={999} onChange={setCurrentYearRerolls} />
            </div>
          </div>

          <div className="surface p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
              <Users className="h-5 w-5 text-emerald-300" />
              Current squad line ratings
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <RatingSlider label="Attack" value={attack} onChange={setAttack} />
              <RatingSlider label="Midfield" value={midfield} onChange={setMidfield} />
              <RatingSlider label="Defense" value={defense} onChange={setDefense} />
              <RatingSlider label="Keeper" value={keeper} onChange={setKeeper} />
            </div>
          </div>

          <div className="surface p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
              Reroll risk mode
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["conserve", "Conserve", "Keep a 12-reroll reserve before tournaments."],
                ["balanced", "Balanced", "Keep a 7-reroll reserve and spend the rest."],
                ["spend", "Spend", "Keep only 3 rerolls and chase upgrades now."],
              ].map(([value, label, body]) => (
                <button
                  key={value}
                  onClick={() => setPreferredRisk(value as "conserve" | "balanced" | "spend")}
                  className={`rounded-md border p-4 text-left transition ${
                    preferredRisk === value
                      ? "border-amber-300 bg-amber-300 text-slate-950"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-emerald-300/40"
                  }`}
                >
                  <span className="block text-sm font-black">{label}</span>
                  <span className="mt-1 block text-xs leading-5 opacity-80">{body}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="surface sticky top-24 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Gauge className="h-5 w-5 text-amber-300" />
                Results
              </h2>
              <span className="rounded-md bg-emerald-300 px-2 py-1 font-mono text-xs font-black text-emerald-950">
                {results.readiness}/100
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Total Coins</span>
                <strong className="block font-mono text-2xl text-white">{results.totalCoins.toLocaleString()}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Pack Opens</span>
                <strong className="block font-mono text-2xl text-white">{results.packOpens}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Team Rerolls</span>
                <strong className="block font-mono text-2xl text-white">{results.totalTeamRerolls}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Year Rerolls</span>
                <strong className="block font-mono text-2xl text-white">{results.totalYearRerolls}</strong>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-amber-300/25 bg-amber-300/10 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Goal className="h-5 w-5 text-amber-200" />
                <h3 className="font-black text-white">{results.advice.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">{results.advice.body}</p>
              <p className="mt-3 text-xs font-bold text-amber-100">Recommended shape: {results.advice.formation}</p>
            </div>

            <div className="mt-4 space-y-2 rounded-md border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p>
                Keep reserve target: <strong className="text-white">{results.reserveTarget}</strong> rerolls per type.
              </p>
              <p>
                Spendable Team Rerolls: <strong className="text-white">{results.spendableTeamRerolls}</strong>
              </p>
              <p>
                Spendable Year Rerolls: <strong className="text-white">{results.spendableYearRerolls}</strong>
              </p>
              <p>
                Remaining Coins after packs: <strong className="text-white">{results.remainingCoins.toLocaleString()}</strong>
              </p>
            </div>

            <div className="mt-5 grid gap-2">
              <Link href="/codes" className="btn-primary">
                <Sparkles className="h-5 w-5" />
                Copy Current Codes
              </Link>
              <Link href="/tier-list" className="btn-secondary">
                <Trophy className="h-5 w-5 text-amber-300" />
                Compare Card Roles
              </Link>
            </div>
          </div>

          <div className="surface p-5">
            <h3 className="mb-3 flex items-center gap-2 font-black text-white">
              <PackageOpen className="h-5 w-5 text-emerald-300" />
              Calculator note
            </h3>
            <p className="text-sm leading-6 text-slate-400">
              Pack prices, rewards, and card pools can change after updates. Use the inputs above for the numbers visible in your server.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
