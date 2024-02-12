import GameTypeCategory from "./GameTypeCategory";
import Analytic from "./Analytic";
import { gql, useQuery } from "@apollo/client";
import { MatchDto } from "../../../gql/graphql";
import Match from "./Match";
import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";

interface Props {
  matches: MatchDto[] | undefined;
}

function Matches(props: Props) {
  const fetch = useFetch();

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
        {fetch?.matches.data
          ?.slice()
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
