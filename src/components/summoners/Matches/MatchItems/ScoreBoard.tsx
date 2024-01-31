import React, { createContext, useContext, useState } from "react";
import { useRecoilValue } from "recoil";
import { MatchDto, ParticipantDto } from "../../../../gql/graphql";

type Score = {
  kills: number;
  deaths: number;
  assists: number;
  cs: {};
  ward: number;
};

function ScoreBoard(props: { participant: ParticipantDto }) {
  const [isRankedScoreVisible, setIsRankedScoreVisible] = useState(true);
  // const matchRecoilData = useRecoilValue(matchesDataState).at(
  //   matchContext.index ?? 0
  // );

  // const scoreData: {
  //   score: Score;
  //   rank: Score;
  //   average: string;
  //   killEngage: number;
  // } = {
  //   score: {
  //     kills: props.kills,
  //     deaths: props.deaths,
  //     assists: props.assists,
  //     cs:
  //       (matchContext.participant?.totalMinionsKilled ?? 0) +
  //       (matchContext.participant?.neutralMinionsKilled ?? 0)!,
  //     ward: matchContext.participant?.wardsPlaced!,
  //   },
  //   rank: {
  //     kills:
  //       matchContext.match?.teams
  //         ?.flatMap((team) =>
  //           team.participants?.flatMap((summoner) => summoner.kills)
  //         )
  //         .sort((a, b) => b! - a!)
  //         .findIndex((kills) => kills === matchContext.participant?.kills)! + 1,
  //     deaths:
  //       matchContext.match?.teams
  //         ?.flatMap((team) =>
  //           team.participants?.flatMap((summoner) => summoner.deaths)
  //         )
  //         .sort((a, b) => b! - a!)
  //         .findIndex((deaths) => deaths === matchContext.participant?.deaths)! +
  //       1,
  //     assists:
  //       matchContext.match?.teams
  //         ?.flatMap((team) =>
  //           team.participants?.flatMap((summoner) => summoner.assists)
  //         )
  //         .sort((a, b) => b! - a!)
  //         .findIndex(
  //           (assists) => assists === matchContext.participant?.assists
  //         )! + 1,
  //     cs:
  //       matchContext.match?.teams
  //         ?.flatMap((team) =>
  //           team.participants?.flatMap(
  //             (summoner) =>
  //               summoner.totalMinionsKilled! + summoner.neutralMinionsKilled!
  //           )
  //         )
  //         .sort((a, b) => b! - a!)
  //         .findIndex(
  //           (cs) =>
  //             cs ===
  //             matchContext.participant?.totalMinionsKilled! +
  //               matchContext.participant?.neutralMinionsKilled!
  //         )! + 1,

  //     ward:
  //       matchContext.match?.teams
  //         ?.flatMap((team) =>
  //           team.participants?.flatMap((summoner) => summoner.wardsPlaced)
  //         )
  //         .sort((a, b) => b! - a!)
  //         .findIndex(
  //           (ward) => ward === matchContext.participant?.wardsPlaced
  //         )! + 1,
  //   },
  //   average: (
  //     ((matchContext.participant?.kills ?? 0) +
  //       (matchContext.participant?.assists ?? 0)) /
  //     (matchContext.participant?.deaths ?? 0)
  //   ).toFixed(2),
  //   killEngage: Math.round(
  //     (((matchContext.participant?.kills ?? 0) +
  //       (matchContext.participant?.assists ?? 0)) /
  //       (matchRecoilData?.teams?.find(
  //         (team) => team.teamId === matchContext.participant?.teamId
  //       )?.objectives?.champion?.kills as number)) *
  //       100
  //   ),
  // };

  return (
    <div
      className="flex justify-center cursor-pointer select-none w-72"
      onClick={() => {
        setIsRankedScoreVisible(!isRankedScoreVisible);
      }}
    >
      <table className="text-gray-600">
        <thead>
          <tr className="text-xs">
            <th className="w-16">킬</th>
            <th className="w-16 text-red-600">데스</th>
            <th className="w-16">어시스트</th>
            <th className="w-16">
              {props.participant.individualPosition === "UTILITY"
                ? "와드"
                : "CS"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xl font-extrabold">
            <td>
              <ScoreItem rank={0} score={props.participant.kills} />
            </td>
            <td className="text-red-600">
              <ScoreItem rank={0} score={props.participant.deaths} />
            </td>
            <td>
              <ScoreItem rank={0} score={props.participant.assists} />
            </td>
            <td>
              <div className="flex gap-1 justify-center">
                {/* {props.individualPosition === "UTILITY"
                  ? isRankedScoreVisible
                    ? scoreData.rank.ward
                    : scoreData.score.ward
                  : isRankedScoreVisible
                  ? scoreData.rank.cs
                  : scoreData.score.cs}
                {isRankedScoreVisible && Rank()} */}
              </div>
            </td>
          </tr>
          <tr className="text-xs">
            <td colSpan={3}>
              <div className="flex gap-3 justify-center">
                <div>{`평점 ${0}`}</div>
                <div>
                  {`킬관여
                  ${0}%`}
                </div>
              </div>
            </td>
            <td>
              {/* {(props.individualPosition === "UTILITY"
                ? props.wardsPlaced /
                  new Date(
                    (matchContext.match?.gameDuration as number) * 1000
                  ).getMinutes()!
                : ((matchContext.participant?.totalMinionsKilled as number) +
                    (matchContext.participant
                      ?.neutralMinionsKilled as number)) /
                  new Date(
                    (matchContext.match?.gameDuration as number) * 1000
                  ).getMinutes()
              ).toFixed(1)} */}
              /분
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Rank() {
  return <div className="text-xs font-semibold self-end mb-[4px]">등</div>;
}

function ScoreItem(props: { rank: number; score: number }) {
  // const scoreboardContext = useContext(ScoreBoardContext);

  return (
    <div className="flex gap-1 justify-center">
      {props.score}
      {/* {(scoreboardContext ? props.rank : props.score) ?? 0} */}
      {/* {scoreboardContext && ( */}
      {/* <div className="text-xs font-semibold self-end mb-[4px]">등</div> */}
      {/* )} */}
    </div>
  );
}

export default ScoreBoard;
