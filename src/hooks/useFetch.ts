import * as tanstackQuery from "@tanstack/react-query";
import { AccountApi, SummonerApi, SpectatorApi, LeagueApi } from "../models";
import * as graphql from "@apollo/client";
import { MatchDto } from "../gql/graphql";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accountState } from "../recoil/navigate/atom";
import { useMemo } from "react";

export default function useFetch() {
  const location = useLocation();
  const [, setAccount] = useRecoilState(accountState);

  const riot = tanstackQuery.useQuery({
    queryKey: ["summonerData"],
    queryFn: async () => {
      if (location === undefined) return;

      const account = await new AccountApi()
        .getAccountByGameNameWithTagLine({
          tagLine: location.hash.replace("#", ""),
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
      const league = await new LeagueApi()
        .getLeague({
          summonerId: summoner.id,
          region: "KR",
        })
        .catch(() => undefined);

      const spectator = await new SpectatorApi()
        .getSpectator({
          puuid: account.puuid,
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
        limit: 20
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
            champLevel
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
    // if (riot.isLoading || riot.error || matches.error || matches.loading)
    //   return;
    if (riot.data === undefined) return;
    setAccount({
      puuid: riot.data.account.puuid,
      summonerId: riot.data.summoner.id,
      gameName: riot.data.account.gameName,
      tagLine: riot.data.account.tagLine,
    });

    return {
      riot: riot.data,
      matches: matches.data?.getMatch,
    };
  }, [matches.data?.getMatch, riot.data, setAccount]);

  const isLoading = useMemo(() => {
    return riot.isLoading || matches.loading;
  }, [matches.loading, riot.isLoading]);

  const refetch = () => {
    riot.refetch();
    matches.refetch();
  };

  return { fetch, refetch, isLoading };
}
