import { createContext, useEffect, useState } from "react";
import GameTypeCategory from "./GameTypeCategory";
import Analytic from "./Analytic";
import { gql, useQuery, execute, useLazyQuery } from "@apollo/client";
import { apolloClient } from "../../..";
import { MatchDto } from "../../../gql/graphql";
import Match from "./Match";
import { useQueryClient } from "@tanstack/react-query";

// export const matchContext = createContext<MatchDto[]>([]);

function Matches(props: { puuid: string }) {
  const { loading, error, data, refetch } = useQuery<{
    getMatch: MatchDto[];
  }>(gql`
    query {
      getMatch(
        puuid: "${props.puuid}"
        count: 20
      ) {
        info {
          gameCreation
          gameMode
          teams {
            bans {
              championId
              pickTurn
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
            totalMinionsKilled
            neutralMinionsKilled
            individualPosition
            win
          }
        }
      }
    }`);

  useEffect(() => {
    refetch();
    if (!loading) console.log(data);
  }, [props.puuid]);

  if (loading) return <></>;
  if (data === undefined) return <>전적 기록이 존재하지 않습니다.</>;

  return (
    // <matchContext.Provider value={data?.getMatch}>
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
            <Match
              match={match}
              puuid={props.puuid}
              key={index}
              index={index}
            />
          ))}
      </div>
    </div>
    // </matchContext.Provider>
  );
}

export default Matches;
