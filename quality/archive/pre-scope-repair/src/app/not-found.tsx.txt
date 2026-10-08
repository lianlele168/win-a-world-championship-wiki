import Link from "next/link";
import { Calculator, Home, Key, Swords } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[60vh] items-center py-14">
      <section className="surface mx-auto max-w-2xl p-8 text-center">
        <p className="mb-3 font-mono text-sm font-black text-amber-200">404</p>
        <h1 className="mb-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mb-7 text-sm leading-7 text-slate-300">
          This route is not in the current Win A World Championship wiki, but the core tools are ready below.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="/codes" className="btn-secondary">
            <Key className="h-5 w-5 text-amber-300" />
            Codes
          </Link>
          <Link href="/calculator" className="btn-secondary">
            <Calculator className="h-5 w-5 text-emerald-300" />
            Calculator
          </Link>
          <Link href="/tier-list" className="btn-secondary">
            <Swords className="h-5 w-5 text-amber-300" />
            Tier List
          </Link>
        </div>
      </section>
    </main>
  );
}
