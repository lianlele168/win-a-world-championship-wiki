export interface PlayerCard {
  id: string;
  name: string;
  slug: string;
  tier: 'S' | 'A' | 'B' | 'C';
  role: 'Forward' | 'Midfield' | 'Defense' | 'Goalkeeper' | 'Wide Attack';
  priority: number;
  overallRating: number;
  bestFor: string[];
  description: string;
  signals: string[];
}

export interface FormationStrategy {
  id: string;
  name: string;
  formation: string;
  style: 'Possession' | 'Counter-Attack' | 'High-Press' | 'Park the Bus';
  synergyBonus: string;
  recommendedRoles: string[];
}

export interface TournamentPack {
  id: string;
  name: string;
  tier: 'Common' | 'Gold' | 'Diamond' | 'Championship';
  costCoins: number;
  pityThreshold: number;
  legendaryRate: string;
}

export interface ChampionshipCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const PLAYER_CARDS_DATA: PlayerCard[] = [
  {
    id: 'elite-finisher',
    name: 'Elite Finisher 99',
    slug: 'elite-finisher',
    tier: 'S',
    role: 'Forward',
    priority: 98,
    overallRating: 94,
    bestFor: ['Knockout rounds', 'Extra time clutch', 'Low-chance games'],
    description: 'Supreme attacking card capable of converting half-chances with lethal accuracy.',
    signals: ['Clinical finishing', 'Acrobatic headers', 'Off-ball positioning']
  },
  {
    id: 'control-midfielder',
    name: 'Metronome Playmaker',
    slug: 'control-midfielder',
    tier: 'S',
    role: 'Midfield',
    priority: 95,
    overallRating: 92,
    bestFor: ['Possession dominance', 'Tournament synergy', 'Tempo control'],
    description: 'Dictates the match rhythm and threads incisive through-balls behind backlines.',
    signals: ['Vision 99', 'Pinpoint long passes', 'Resistant to press']
  },
  {
    id: 'anchor-defender',
    name: 'Titan Centerback',
    slug: 'anchor-defender',
    tier: 'A',
    role: 'Defense',
    priority: 88,
    overallRating: 89,
    bestFor: ['Finals shutout', 'Corner defense', 'Underdog counter builds'],
    description: 'Imposing physical presence that neutralizes opposition target men and aerial crosses.',
    signals: ['Slide tackle precision', 'Aerial dominance', 'Leadership aura']
  },
  {
    id: 'pace-winger',
    name: 'Flash Touchline Winger',
    slug: 'pace-winger',
    tier: 'A',
    role: 'Wide Attack',
    priority: 84,
    overallRating: 87,
    bestFor: ['Rapid transitions', '4-3-3 wide overload', 'Drawing fouls'],
    description: 'Blistering acceleration that blows past fullbacks on transition counter-attacks.',
    signals: ['Sprint speed 98', 'Whipped crosses', 'Cut-inside trivela shots']
  },
  {
    id: 'sweeper-keeper',
    name: 'Golden Glove Stopper',
    slug: 'sweeper-keeper',
    tier: 'B',
    role: 'Goalkeeper',
    priority: 76,
    overallRating: 85,
    bestFor: ['Penalty shootouts', 'Defensive formations', 'High line sweeping'],
    description: 'Reflexive shot-stopper who charges down through-balls outside the box.',
    signals: ['1v1 rushing', 'Penalty save specialist', 'Cat-like diving reflexes']
  },
  {
    id: 'box-to-box-engine',
    name: 'Endless Engine B2B',
    slug: 'box-to-box-engine',
    tier: 'A',
    role: 'Midfield',
    priority: 89,
    overallRating: 88,
    bestFor: ['High-pressing', 'Interceptions', 'Late box arrivals'],
    description: 'Covers every blade of grass, breaking up opponent counters and scoring from edge of box.',
    signals: ['Stamina 99', 'Aggressive tackling', 'Long-range rockets']
  },
  {
    id: 'overlapping-fullback',
    name: 'Aero Wingback',
    slug: 'overlapping-fullback',
    tier: 'B',
    role: 'Defense',
    priority: 78,
    overallRating: 83,
    bestFor: ['5-3-2 wing support', 'Overlap crossing'],
    description: 'Provides relentless width in attack while tracking back on defense.',
    signals: ['Endurance', 'Curled delivery', 'Interception awareness']
  },
  {
    id: 'target-striker-poacher',
    name: 'Towering Target Man',
    slug: 'target-striker-poacher',
    tier: 'B',
    role: 'Forward',
    priority: 80,
    overallRating: 84,
    bestFor: ['Set piece goals', 'Hold-up play in 4-4-2'],
    description: 'Physical focal point holding off defenders to lay off balls to surging wingers.',
    signals: ['Physicality 95', 'Jumping reach', 'Shielding control']
  }
];

export const FORMATIONS_DATA: FormationStrategy[] = [
  { id: 'form-433-attack', name: '4-3-3 Attack Overload', formation: '4-3-3', style: 'High-Press', synergyBonus: '+15% Wing Crossing Accuracy', recommendedRoles: ['Pace Winger', 'Elite Finisher'] },
  { id: 'form-4231-control', name: '4-2-3-1 Balanced Pivot', formation: '4-2-3-1', style: 'Possession', synergyBonus: '+20% Midfield Passing Retention', recommendedRoles: ['Control Midfielder', 'Box-to-Box Engine'] },
  { id: 'form-352-counter', name: '3-5-2 Direct Counter', formation: '3-5-2', style: 'Counter-Attack', synergyBonus: '+25% Transition Speed', recommendedRoles: ['Aero Wingback', 'Titan Centerback'] },
  { id: 'form-541-lockdown', name: '5-4-1 Fortress Defense', formation: '5-4-1', style: 'Park the Bus', synergyBonus: '+30% Clean Sheet Probability', recommendedRoles: ['Titan Centerback', 'Golden Glove Stopper'] }
];

export const TOURNAMENT_PACKS_DATA: TournamentPack[] = [
  { id: 'pack-starter', name: 'Rookie Scout Pack', tier: 'Common', costCoins: 1500, pityThreshold: 5, legendaryRate: '1.2%' },
  { id: 'pack-gold', name: 'Champions Gold Pack', tier: 'Gold', costCoins: 7500, pityThreshold: 10, legendaryRate: '5.5%' },
  { id: 'pack-diamond', name: 'Elite World Cup Pack', tier: 'Diamond', costCoins: 25000, pityThreshold: 15, legendaryRate: '18.0%' },
  { id: 'pack-trophy', name: 'Jules Rimet Mythic Pack', tier: 'Championship', costCoins: 80000, pityThreshold: 20, legendaryRate: '45.0%' }
];

export const CHAMPIONSHIP_CODES_DATA: ChampionshipCode[] = [
  { id: 'code-fifa2026', code: 'WORLDCHAMP2026', reward: '50,000 Trophy Coins + 2x Gold Packs', status: 'ACTIVE', dateAdded: '2026-08-20' },
  { id: 'code-trophywin', code: 'GOLDENGROUP', reward: 'Free Diamond Reroll Token', status: 'ACTIVE', dateAdded: '2026-08-10' },
  { id: 'code-blackbarn', code: 'BLACKBARN', reward: '25,000 Coins + Stamina Potion', status: 'ACTIVE', dateAdded: '2026-08-01' },
  { id: 'code-finalgoal', code: 'HAT_TRICK', reward: '3x Premium Scout Packs', status: 'ACTIVE', dateAdded: '2026-07-25' },
  { id: 'code-penalty', code: 'CLEANSHEET', reward: '10,000 Coins', status: 'ACTIVE', dateAdded: '2026-07-15' },
  { id: 'code-champions', code: 'CHAMPIONS26', reward: 'Rare Winger Card Unlock', status: 'ACTIVE', dateAdded: '2026-07-01' }
];
