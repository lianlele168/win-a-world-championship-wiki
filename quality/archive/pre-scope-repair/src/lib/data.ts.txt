import codes from "@/data/codes.json";
import config from "@/data/game.config.json";
import packs from "@/data/packs.json";
import playerCards from "@/data/player-cards.json";

export function getGameConfig() {
  return config;
}

export function getCodes() {
  return codes;
}

export function getActiveCodes() {
  return codes.filter((code) => code.status === "active");
}

export function getNeedsCheckCodes() {
  return codes.filter((code) => code.status === "needs-check");
}

export function getExpiredCodes() {
  return codes.filter((code) => code.status === "expired");
}

export function getCodeRewardTotals() {
  return getActiveCodes().reduce(
    (totals, code) => ({
      coins: totals.coins + code.coins,
      teamRerolls: totals.teamRerolls + code.teamRerolls,
      yearRerolls: totals.yearRerolls + code.yearRerolls,
      cupTickets: totals.cupTickets + code.cupTickets,
      tokens: totals.tokens + code.tokens,
    }),
    { coins: 0, teamRerolls: 0, yearRerolls: 0, cupTickets: 0, tokens: 0 },
  );
}

export function getPlayerCards() {
  return playerCards;
}

export function getPacks() {
  return packs;
}
