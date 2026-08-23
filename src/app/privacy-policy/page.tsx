import type { Metadata } from "next";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the unofficial Win A World Championship Wiki.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-10">
      <section className="surface mx-auto max-w-4xl p-6 sm:p-8">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-white">Privacy Policy</h1>
        <p className="mb-6 text-sm leading-7 text-slate-300">
          Last updated: {config.game.lastUpdated}. This unofficial fan site provides guides and tools for {config.game.name}. We keep this policy simple so visitors can understand how the site works.
        </p>

        <div className="space-y-6 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="mb-2 text-xl font-black text-white">Information we collect</h2>
            <p>
              We do not require accounts, logins, or Roblox credentials. If analytics or advertising services are added later, they may collect standard usage data such as page views, browser type, approximate region, and referral source.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">Cookies and ads</h2>
            <p>
              This site may use cookies for analytics, security, performance, or advertising. Third-party ad providers may use cookies to show relevant ads according to their own policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">External links</h2>
            <p>
              The site links to Roblox and public gaming sources. We are not responsible for the privacy practices or content of external sites.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">Children&apos;s privacy</h2>
            <p>
              This fan site is informational and does not knowingly collect personal information from children. Roblox gameplay and accounts are governed by Roblox&apos;s own terms and privacy rules.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">Contact</h2>
            <p>
              If a contact address is added to the production site, privacy requests can be sent there. Until then, use the linked source pages for official game or platform issues.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
