import { createContext, useEffect } from "react";
import GameTypeCategory from "./GameTypeCategory";
import Analytic from "./Analytic";
import { gql, useQuery } from "@apollo/client";
import { MatchDto } from "../../../gql/graphql";
import Match from "./Match";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import { matchesState } from "../../../recoil/match/atom";

function Matches() {
  const account = useRecoilValue(accountState);

  const { loading, error, data, refetch } = useQuery<{
    getMatch: MatchDto[];
  }>(gql`
    query {
      getMatch(
        puuid: "${account.puuid}"
        count: 20
      ) {
        info {
          gameCreation
          queueId
          gameDuration
          teams {
            bans {
              championId
              pickTurn
            }
            objectives {
              champion {
                kills
              }
            }
            win
            teamId
          }
          participants {
            puuid
            championName
            championId
            summonerName
            riotIdGameName
            riotIdTagline
            teamId
            item0
            item1
            item2
            item3
            item4
            item5
            item6
            kills
            deaths
            assists
            wardsPlaced
            wardsKilled
            detectorWardsPlaced
            visionScore
            totalMinionsKilled
            neutralMinionsKilled
            individualPosition
            win
          }
        }
      }
    }`);

  // useEffect(() => {
  //   refetch();
  // }, [location]);

  if (loading) return <></>;
  if (data === undefined) return <>전적 기록이 존재하지 않습니다.</>;

  return (
    <div className="flex flex-col gap-5 text-slate-600">
      <div className="flex gap-1 ml-5 font-bold">
        <p>최근</p>
        <p className="text-orange-500">20게임</p>
        <p>전적</p>
      </div>
      <GameTypeCategory />
      <Analytic />
      <div className="flex flex-col gap-2">
        {data?.getMatch
          .slice()
          .sort(
            (prevMatch, currentMatch) =>
              currentMatch.info.gameCreation - prevMatch.info.gameCreation
          )
          .map((match, index) => (
            <Match match={match} index={index} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Matches;
