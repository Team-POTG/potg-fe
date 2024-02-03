import { useEffect, useState } from "react";
import GameTypeCategory from "./GameTypeCategory";
import Analytic from "./Analytic";
import { gql, useQuery, execute, useLazyQuery } from "@apollo/client";
import { apolloClient } from "../../..";
import { MatchDto } from "../../../gql/graphql";
import Match from "./Match";
import { useQueryClient } from "@tanstack/react-query";

function Matches(props: { puuid: string | undefined }) {
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

  // const a = data?.getMatch.sort(function (a, b) {
  //   return a.info.gameCreation - b.info.gameCreation;
  // });
  // console.log(data?.getMatch[0].info.gameCreation);
  // const client = new ApolloClient({
  //   uri: process.env.SERVER_URL,
  //   cache: new InMemoryCache(),
  // });
  // const [a, setA] = useState();

  // useEffect(() => {
  //   function fetch() {
  //     const aaa = apolloClient
  //       .query({
  //         query: gql(`query {
  //     getMatch(
  //       puuid: "${props.puuid}"
  //       count: 5
  //     ) {
  //       info {
  //         gameMode
  //       }
  //     }
  //   }`),
  //       })
  //       .then((data) => {
  //         Array(data.data.getMatch).map((a) => console.log(a));
  //         // console.log(data.data.getMatch);
  //       });
  //   }

  //   fetch();

  //   // async function fetch() {
  //   //   const aa = await apolloClient.query({
  //   //     query: gql`
  //   // query {
  //   //   getMatch(
  //   //     puuid: "${props.puuid}"
  //   //     count: 5
  //   //   ) {
  //   //     info {
  //   //       gameMode
  //   //     }
  //   //   }
  //   // }
  //   //       `,
  //   //   });
  //   // }
  //   // fetch();

  //   // .then((result) => {
  //   //   setA(result.data);
  //   // });

  //   if (a !== undefined) console.log(a);
  // }, [a, props.puuid]);

  // const [matchesData, setMatchesData] = useRecoilState(matchesDataState);

  // useEffect(() => {
  //   if (props.puuid === undefined) return;
  // SummonerApiFactory()
  //   .getMatches(props.puuid, "asia")
  //   .then((match) => {
  //     // setMatches(match.data);
  //     setMatchesData(match.data);
  //   });
  // }, [props.puuid, setMatchesData]);

  // const [matches, setMatches] = useState<string[]>();
  // useEffect(() => {
  //   MatchesApiFactory()
  //     .getMatches(props.puuid!, "asia")
  //     .then((matchId) => {
  //       setMatches([...matchId.data]);
  //     });
  // }, [props.puuid]);
  if (loading) return <></>;

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
        {/* {Array.of(JSON.stringify(a)).map((match, index) => (
          <div>{match}</div>
        ))} */}
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
        {/* {data?.getMatch.map((match, index) => (
          <Match match={match} puuid={props.puuid} key={index} index={index} />
        ))} */}
      </div>
    </div>
  );
}

export default Matches;
