import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from "lucide-react";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: `Privacy Policy & Trust Center | ${config.game.name} Wiki`,
  description: `Privacy policy, COPPA child safety disclosures, and data protection guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Breadcrumb & Badge */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>ROBLOX FAN NETWORK TRUST CENTER</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Privacy Policy & Trust Disclosures
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: {config.game.lastUpdated}. Unofficial fan guide and strategy tools for {config.game.name}.
          </p>
        </div>

        {/* 4 Trust Highlights Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white">COPPA Compliant</p>
              <p className="text-slate-400">Safe for under 13</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Lock className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white">Zero Account Needed</p>
              <p className="text-slate-400">No passwords or Robux</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white">100% Client-Side</p>
              <p className="text-slate-400">Calculators run in browser</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Mail className="h-5 w-5 shrink-0 text-indigo-400" />
            <div>
              <p className="font-bold text-white">Verified Contact</p>
              <p className="text-slate-400">48h response SLA</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections in Card Container */}
        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Lock className="h-5 w-5 text-amber-400" />
              <span>1. Zero Personal Data & No Roblox Credentials</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              This fan website does not require user registration, logins, or personal profile creation. We will <strong className="text-white">NEVER</strong> ask for your Roblox password, 2-factor authentication codes, session tokens, or billing details. All squad calculators, reroll simulators, and code copy tools run entirely within your local web browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>2. COPPA & Child Online Privacy Compliance</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We recognize that many players of {config.game.name} on Roblox are young community members. In strict compliance with the Children&apos;s Online Privacy Protection Act (COPPA), this website does not knowingly collect, store, or profile personal identification from children under the age of 13. Minors can safely use this wiki without any risk of personal data harvesting.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Eye className="h-5 w-5 text-cyan-400" />
              <span>3. Telemetry, Cookies & Ad Disclosures</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              To keep this wiki fast, secure, and reliable, standard anonymous web telemetry (such as page response time, browser engine, and approximate region) may be processed by hosting infrastructure. Third-party ad networks (such as Google AdSense) may use cookies to serve relevant gaming ads. You can manage or disable personalized cookies at any time via your browser settings or by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">Google Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ExternalLink className="h-5 w-5 text-blue-400" />
              <span>4. External Platform Hyperlinks</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Our site provides links to official Roblox experience pages, developer Discord servers, and public gaming databases for player convenience. We do not control and are not responsible for the privacy practices, account safety, or content of third-party websites.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property & Fair Use Disclaimer</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Roblox is a registered trademark of Roblox Corporation. {config.game.name}, its logos, and game assets belong to {config.game.developer}. This fan site is an independent, non-commercial guide created for educational, strategy, and commentary purposes under Fair Use.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-indigo-400" />
              <span>6. Editorial & Privacy Contact</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              For any privacy inquiries, content correction requests, or data protection questions, you can reach our editorial team directly at:
            </p>
            <div className="inline-block rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 font-mono text-sm font-bold text-emerald-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              Published under the <a href="https://robloxwikihub.com/about" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">Roblox Wiki Hub Editorial Standards</a>. Inquiries are acknowledged and addressed within 48 business hours by Lead Webmaster lianlele168.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

