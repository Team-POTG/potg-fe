import * as tanstackQuery from "@tanstack/react-query";
import {
  AccountApi,
  SummonerApi,
  SpectatorApi,
  LeagueApi,
  Account,
  CurrentGameInfo,
  League,
  Summoner,
} from "../models";
import * as graphql from "@apollo/client";
import { MatchDto } from "../gql/graphql";
import { Location, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accountState } from "../recoil/navigate/atom";
import { useEffect, useMemo, useRef, useState } from "react";

// type TanstackQueryData = tanstackQuery.UseQueryResult<
//   | {
//       account: Account;
//       summoner: Summoner;
//       spectator: CurrentGameInfo | undefined;
//       league: League | undefined;
//     }
//   | undefined,
//   Error
// >;

// type GraphQLData = graphql.QueryResult<
//   {
//     getMatch: MatchDto[];
//   },
//   graphql.OperationVariables
// >;

interface FetchData {
  riot:
    | {
        account: Account;
        summoner: Summoner;
        spectator: CurrentGameInfo | undefined;
        league: League | undefined;
      }
    | undefined;
  matches: MatchDto[] | undefined;
}

export default function useFetch() {
  const locationRef = useRef<Location>();
  const location = useLocation();
  const [, setAccount] = useRecoilState(accountState);
  // const [fetch, setFetch] = useState<FetchData | undefined>();

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  const riot = tanstackQuery.useQuery({
    queryKey: ["summonerData"],
    queryFn: async () => {
      if (locationRef.current === undefined) return;

      const account = await new AccountApi()
        .getAccountByGameNameWithTagLine({
          tagLine: locationRef.current.hash.replace("#", ""),
          gameName: decodeURI(location.pathname.replace("/", "")),
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      if (account === undefined) return;
      const summoner = await new SummonerApi()
        .getSummonerByPuuid({
          puuid: account.puuid,
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      if (summoner === undefined) return;

      const spectator = await new SpectatorApi()
        .getSpectator({
          summonerId: summoner.id,
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      const league = await new LeagueApi()
        .getLeague({
          id: summoner.id,
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      return {
        account: account,
        summoner: summoner,
        spectator: spectator,
        league: league,
      };
    },
  });

  const matches = graphql.useQuery<{
    getMatch: MatchDto[];
  }>(graphql.gql`
    query {
      getMatch(
        puuid: "${riot.data?.account.puuid}"
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

  const fetch = useMemo(() => {
    if (riot.isLoading || riot.error || matches.error || matches.loading)
      return;
    if (riot.data === undefined) return;
    setAccount({
      puuid: riot.data.account.puuid,
      summonerId: riot.data.summoner.id,
      gameName: riot.data.account.gameName,
      tagLine: riot.data.account.tagLine,
    });

    return {
      riot: {
        data: riot.data,
        refetch: () => riot.refetch(),
      },
      matches: {
        data: matches.data?.getMatch,
        refetch: () => matches.refetch(),
      },
    };
  }, [
    matches.data?.getMatch,
    matches.error,
    matches.loading,
    riot.data,
    riot.error,
    riot.isLoading,
    setAccount,
  ]);

  return fetch;
}
