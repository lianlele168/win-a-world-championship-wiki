import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from "lucide-react";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: `Terms of Use & Community Guidelines | ${config.game.name} Wiki`,
  description: `Terms of use, gameplay accuracy disclaimers, and fair use guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Breadcrumb & Badge */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Terms of Use</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
            <FileText className="h-3.5 w-3.5" />
            <span>COMMUNITY & LEGAL TERMS</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Terms of Use & Service Guidelines
          </h1>
          <p className="text-sm text-slate-300">
            Unofficial strategy and utility companion for {config.game.name}.
          </p>
        </div>

        {/* Detailed Sections in Surface Container */}
        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Gamepad2 className="h-5 w-5 text-emerald-400" />
              <span>1. Unofficial Fan Companion</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              This site is an independent, community-operated guide and calculator hub for {config.game.name} on the Roblox platform. We are not affiliated with, sponsored by, authorized by, or endorsed by Roblox Corporation, {config.game.developer}, or any related entities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>2. Live Patch Volatility & Accuracy Disclaimer</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Roblox games update frequently. Code redemption statuses, player card ratings, formation multipliers, pack drop rates, and reroll mechanics are subject to rapid in-game tuning by the development studio. While we actively cross-reference community feedback and server updates, all data and calculator projections are provided &quot;as is&quot; for reference. Always confirm active stats inside the official Roblox experience before committing resources.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldAlert className="h-5 w-5 text-amber-400" />
              <span>3. Anti-Phishing & Account Security Pledge</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We will <strong className="text-white">never</strong> ask for your Roblox account credentials, security passwords, session cookies, or payment details. Never share private security credentials with any third-party fan guide. All working codes must be redeemed solely within the official Roblox game client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>4. Acceptable Community Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Visitors are welcome to freely access, bookmark, and share our guides and squad tools. You agree not to engage in malicious activities including denial-of-service attempts, aggressive automated scraping, code injection, or misrepresenting this fan site as official game documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property & Fair Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Roblox is a registered trademark of Roblox Corporation. {config.game.name}, associated game titles, character models, and game assets remain the property of {config.game.developer}. All media and text on this site are used under Fair Use principles for educational, analytical, and entertainment commentary.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-indigo-400" />
              <span>6. DMCA & Contact Inquiries</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              If you are a rights holder or game developer and have questions regarding attribution, content corrections, or removal requests, please contact our editorial staff directly at:
            </p>
            <div className="inline-block rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 font-mono text-sm font-bold text-emerald-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              We respond promptly within 48 business hours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

