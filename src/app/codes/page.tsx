import type { Metadata } from "next";
import CodesClient from "./CodesClient";
import { getActiveCodes } from "@/lib/data";
import { getMonthYear } from "@/lib/date";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

const monthYear = getMonthYear();

export const metadata: Metadata = {
  title: `Win A World Championship Codes (${monthYear}) - Working Rewards`,
  description:
    "Copy working Win A World Championship codes for Coins, Team Rerolls, Year Rerolls, and Tokens. Includes source confidence and redeem steps.",
  alternates: { canonical: "/codes/" },
};

const faqs = [
  {
    question: "What are the working Win A World Championship codes?",
    answer: `The currently official-current codes are ${getActiveCodes().map((code) => code.code).join(", ")} as of August 23, 2026.`,
  },
  {
    question: "How do I redeem codes in Win A World Championship?",
    answer:
      "Join the Roblox game, complete or skip the tutorial, click the Codes button on the left side, paste a working code, then press Redeem.",
  },
  {
    question: "Why are some codes marked needs-check?",
    answer:
      "Some public code pages disagree on older codes. This wiki marks those codes as needs-check so you can test them without confusing them with the current Roblox description list.",
  },
  {
    question: "Do Win A World Championship codes give free rerolls?",
    answer:
      "Yes. Current codes commonly grant Coins plus Team Rerolls and Year Rerolls, and some current codes also grant Tokens.",
  },
  {
    question: "How often should I check for new codes?",
    answer:
      "Check after Roblox description updates, like milestones, visits, concurrent player goals, and Discord announcements from Black Barn Studios.",
  },
];

export default function CodesPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Codes", item: "https://winaworldchampionship.robloxwikihub.com/codes/" },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CodesClient />
    </>
  );
}
