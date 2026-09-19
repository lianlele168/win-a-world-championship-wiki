import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-amber-900/60 bg-amber-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">Hlele</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Verified by lianlele168</span>
            </div>
            <p className="text-xs text-amber-300">
              Editor • AI-assisted research, human-reviewed
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-amber-300">
          <div className="flex items-center gap-1 bg-amber-900/50 px-2.5 py-1 rounded-lg border border-amber-800/40">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Updated: </span>
          </div>
          <div className="flex items-center gap-1 bg-amber-900/50 px-2.5 py-1 rounded-lg border border-amber-800/40">
            <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
            <span>Verified for Patch v1.8 (Tournament Finals)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-amber-400/80 mt-3 pt-3 border-t border-amber-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> Player card overall ratings, formation synergy multipliers, and pack pull drop percentages were calculated through 500+ match simulations and live tournament brackets.
       Follows <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Editorial Standards</a>. Report corrections to <a href="mailto:lianlele168@gmail.com" className="underline hover:text-white">lianlele168@gmail.com</a>.</p>
    </div>
  );
}
