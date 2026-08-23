import type { Metadata } from "next";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the unofficial Win A World Championship Wiki.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="page-shell py-10">
      <section className="surface mx-auto max-w-4xl p-6 sm:p-8">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-white">Terms of Use</h1>
        <p className="mb-6 text-sm leading-7 text-slate-300">
          Last updated: {config.game.lastUpdated}. By using this site, you agree to the following basic terms.
        </p>

        <div className="space-y-6 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="mb-2 text-xl font-black text-white">Unofficial content</h2>
            <p>
              This site is an unofficial fan-made guide for {config.game.name}. It is not affiliated with, sponsored by, or endorsed by Roblox Corporation or {config.game.developer}.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">Accuracy</h2>
            <p>
              Roblox games update quickly. We try to separate verified information from needs-check notes, but visitors should verify codes and game behavior inside the game before relying on them.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">No account access</h2>
            <p>
              We will never ask for your Roblox password, account token, or private credentials. Do not share account credentials with any fan site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-black text-white">External sites</h2>
            <p>
              Links to Roblox, Discord, or gaming media are provided for reference. External sites have their own terms and policies.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
