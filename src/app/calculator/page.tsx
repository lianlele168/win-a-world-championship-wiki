import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Win A World Championship Calculator - Reroll & Pack Budget 2026",
  description:
    "Use the Win A World Championship calculator to plan code rewards, Coins, Team Rerolls, Year Rerolls, pack openings, and squad weak-line priorities.",
  alternates: { canonical: "/calculator" },
};

const faqs = [
  {
    question: "What does the Win A World Championship calculator do?",
    answer:
      "It combines your current Coins and rerolls with official-current code rewards, then estimates pack opens, remaining Coins, reroll reserves, and the best squad line to fix first.",
  },
  {
    question: "Is the calculator using official hidden card odds?",
    answer:
      "No. Roblox does not expose hidden pack odds here, so this tool calculates resource budget and squad priority without claiming exact pull rates.",
  },
  {
    question: "Should I use all codes before opening packs?",
    answer:
      "Usually yes. Redeeming current codes first gives you a clearer budget before spending Coins or rerolls.",
  },
  {
    question: "What is a safe reroll reserve?",
    answer:
      "Keep enough Team and Year Rerolls to fix at least one weak slot before a tournament run instead of spending all rerolls on the first good card.",
  },
  {
    question: "Why can I edit the pack cost?",
    answer:
      "Pack costs and upgrade paths can vary by update or progression, so the calculator lets you enter the number you see in your own server.",
  },
];

export default function CalculatorPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: "https://winaworldchampionship.robloxwikihub.com/" },
      { name: "Calculator", item: "https://winaworldchampionship.robloxwikihub.com/calculator/" },
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
      <CalculatorClient />
    </>
  );
}
