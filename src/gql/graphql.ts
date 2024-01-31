/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BanDto = {
  __typename?: 'BanDto';
  championId: Scalars['Float']['output'];
  pickTurn: Scalars['Float']['output'];
};

export type InfoDto = {
  __typename?: 'InfoDto';
  gameCreation: Scalars['Float']['output'];
  gameDuration: Scalars['Float']['output'];
  gameEndTimestamp: Scalars['Float']['output'];
  gameId: Scalars['Float']['output'];
  gameMode: Scalars['String']['output'];
  gameName: Scalars['String']['output'];
  gameStartTimestamp: Scalars['Float']['output'];
  gameType: Scalars['String']['output'];
  gameVersion: Scalars['String']['output'];
  mapId: Scalars['Float']['output'];
  participants: Array<ParticipantDto>;
  platformId: Scalars['String']['output'];
  queueId: Scalars['Float']['output'];
  teams: Array<TeamDto>;
  tournamentCode: Scalars['String']['output'];
};

export type MatchDto = {
  __typename?: 'MatchDto';
  info: InfoDto;
  metadata: MetadataDto;
};

export type MetadataDto = {
  __typename?: 'MetadataDto';
  dataVersion: Scalars['String']['output'];
  matchId: Scalars['String']['output'];
  participants: Array<Scalars['String']['output']>;
};

export type ObjectiveDto = {
  __typename?: 'ObjectiveDto';
  first: Scalars['Boolean']['output'];
  kills: Scalars['Float']['output'];
};

export type ObjectivesDto = {
  __typename?: 'ObjectivesDto';
  baron: ObjectiveDto;
  champion: ObjectiveDto;
  dragon: ObjectiveDto;
  inhibitor: ObjectiveDto;
  riftHerald: ObjectiveDto;
  tower: ObjectiveDto;
};

export type ParticipantDto = {
  __typename?: 'ParticipantDto';
  assists: Scalars['Float']['output'];
  baronKills: Scalars['Float']['output'];
  bountyLevel: Scalars['Float']['output'];
  champExperience: Scalars['Float']['output'];
  champLevel: Scalars['Float']['output'];
  championId: Scalars['Float']['output'];
  championName: Scalars['String']['output'];
  championTransform: Scalars['Float']['output'];
  consumablesPurchased: Scalars['Float']['output'];
  damageDealtToBuildings: Scalars['Float']['output'];
  damageDealtToObjectives: Scalars['Float']['output'];
  damageDealtToTurrets: Scalars['Float']['output'];
  damageSelfMitigated: Scalars['Float']['output'];
  deaths: Scalars['Float']['output'];
  detectorWardsPlaced: Scalars['Float']['output'];
  doubleKills: Scalars['Float']['output'];
  dragonKills: Scalars['Float']['output'];
  firstBloodAssist: Scalars['Boolean']['output'];
  firstBloodKill: Scalars['Boolean']['output'];
  firstTowerAssist: Scalars['Boolean']['output'];
  firstTowerKill: Scalars['Boolean']['output'];
  gameEndedInEarlySurrender: Scalars['Boolean']['output'];
  gameEndedInSurrender: Scalars['Boolean']['output'];
  goldEarned: Scalars['Float']['output'];
  goldSpend: Scalars['Float']['output'];
  individualPosition: Scalars['String']['output'];
  inhibitorKills: Scalars['Float']['output'];
  inhibitorTakedowns: Scalars['Float']['output'];
  inhibitorsLost: Scalars['Float']['output'];
  item0: Scalars['Float']['output'];
  item1: Scalars['Float']['output'];
  item2: Scalars['Float']['output'];
  item3: Scalars['Float']['output'];
  item4: Scalars['Float']['output'];
  item5: Scalars['Float']['output'];
  item6: Scalars['Float']['output'];
  itemsPurchased: Scalars['Float']['output'];
  killingSprees: Scalars['Float']['output'];
  kills: Scalars['Float']['output'];
  lane: Scalars['String']['output'];
  largestCriticalStrike: Scalars['Float']['output'];
  largestKillingSpree: Scalars['Float']['output'];
  largestMulitiKill: Scalars['Float']['output'];
  longestTimeSpentLiving: Scalars['Float']['output'];
  magicDamageDealt: Scalars['Float']['output'];
  magicDamageDealtToChampions: Scalars['Float']['output'];
  magicDamageTaken: Scalars['Float']['output'];
  neutralMinionsKilled: Scalars['Float']['output'];
  nexusKills: Scalars['Float']['output'];
  nexusLost: Scalars['Float']['output'];
  nexusTakedowns: Scalars['Float']['output'];
  objectivesStolen: Scalars['Float']['output'];
  objectivesStolenAssists: Scalars['Float']['output'];
  participantId: Scalars['Float']['output'];
  pentaKills: Scalars['Float']['output'];
  perks: PerksDto;
  physicalDamageDealt: Scalars['Float']['output'];
  physicalDamageDealtToChampions: Scalars['Float']['output'];
  physicalDamageTaken: Scalars['Float']['output'];
  profileIcon: Scalars['Float']['output'];
  puuid: Scalars['String']['output'];
  quadraKills: Scalars['Float']['output'];
  riotIdName: Scalars['String']['output'];
  riotIdTagline: Scalars['String']['output'];
  role: Scalars['String']['output'];
  sightWardsBoughtInGame: Scalars['Float']['output'];
  spell1Casts: Scalars['Float']['output'];
  spell2Casts: Scalars['Float']['output'];
  spell3Casts: Scalars['Float']['output'];
  spell4Casts: Scalars['Float']['output'];
  summoner1Casts: Scalars['Float']['output'];
  summoner1Id: Scalars['Float']['output'];
  summoner2Casts: Scalars['Float']['output'];
  summoner2Id: Scalars['Float']['output'];
  summonerId: Scalars['String']['output'];
  summonerLevel: Scalars['Float']['output'];
  summonerName: Scalars['String']['output'];
  teamEarlySurrendered: Scalars['Boolean']['output'];
  teamId: Scalars['Float']['output'];
  teamPosition: Scalars['String']['output'];
  timeCCingOthers: Scalars['Float']['output'];
  timePlayed: Scalars['Float']['output'];
  totalDamageDealt: Scalars['Float']['output'];
  totalDamageDealtToChampions: Scalars['Float']['output'];
  totalDamageShieldedOnTeammates: Scalars['Float']['output'];
  totalDamageTaken: Scalars['Float']['output'];
  totalHeal: Scalars['Float']['output'];
  totalHealsOnTeammates: Scalars['Float']['output'];
  totalMinionsKilled: Scalars['Float']['output'];
  totalTimeCCDealt: Scalars['Float']['output'];
  totalTimeSpentDead: Scalars['Float']['output'];
  totalUnitsHealed: Scalars['Float']['output'];
  tripleKills: Scalars['Float']['output'];
  trueDamageDealt: Scalars['Float']['output'];
  trueDamageDealtToChampions: Scalars['Float']['output'];
  trueDamageTaken: Scalars['Float']['output'];
  turretKills: Scalars['Float']['output'];
  turretTakedowns: Scalars['Float']['output'];
  turretsLost: Scalars['Float']['output'];
  unrealKills: Scalars['Float']['output'];
  visionScore: Scalars['Float']['output'];
  visionWardsBoughtInGame: Scalars['Float']['output'];
  wardsKilled: Scalars['Float']['output'];
  wardsPlaced: Scalars['Float']['output'];
  win: Scalars['Boolean']['output'];
};

export type PerkStatsDto = {
  __typename?: 'PerkStatsDto';
  defense: Scalars['Float']['output'];
  flex: Scalars['Float']['output'];
  offense: Scalars['Float']['output'];
};

export type PerkStyleDto = {
  __typename?: 'PerkStyleDto';
  description: Scalars['String']['output'];
  selections: Array<PerkStyleSelectionDto>;
  style: Scalars['Float']['output'];
};

export type PerkStyleSelectionDto = {
  __typename?: 'PerkStyleSelectionDto';
  perk: Scalars['Float']['output'];
  var1: Scalars['Float']['output'];
  var2: Scalars['Float']['output'];
  var3: Scalars['Float']['output'];
};

export type PerksDto = {
  __typename?: 'PerksDto';
  statPerks: PerkStatsDto;
  styles: Array<PerkStyleDto>;
};

export type Query = {
  __typename?: 'Query';
  getMatch: Array<MatchDto>;
};


export type QueryGetMatchArgs = {
  count: Scalars['Float']['input'];
  puuid: Scalars['String']['input'];
};

export type TeamDto = {
  __typename?: 'TeamDto';
  bans: Array<BanDto>;
  objectives: ObjectivesDto;
  teamId: Scalars['Float']['output'];
  win: Scalars['Boolean']['output'];
};
