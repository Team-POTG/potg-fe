import { region } from "./region";

export default interface SummonerInfo {
  summonerName: string;
  profileIconId: number;
  puuid: string;
  level: number;
  // ranks: [
  //   {
  //     leagueId: string;
  //     queueType: string;
  //     tier: number;
  //     rank: number;
  //     leaguePoints: number;
  //     wins: number;
  //     losses: number;
  //     miniSeries: {
  //       losses: number;
  //       progress: string;
  //       target: number;
  //       wins: number;
  //     };
  //   }
  // ];
}
