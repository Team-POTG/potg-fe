import React, { useContext } from "react";
import { ParticipantDto } from "../../../gql/graphql";
import { ParticipantsContext } from "./Match";
import useRankedScoreToggle from "../../../hooks/useRankedScoreToggle";

function MatchScoreBoard(props: {
  participant: ParticipantDto;
  teamTotalKills: number | undefined;
  gameDuration: number;
}) {
  const participants = useContext(ParticipantsContext);
  const [isRankedScore, setRankedScoreToggle] = useRankedScoreToggle();

  const killAverage =
    (props.participant?.kills + props.participant?.assists) /
    props.participant?.deaths;

  const killEngage = Math.round(
    ((props.participant.kills + props.participant.assists) /
      props.teamTotalKills!) *
      100
  );

  const scoreRank = {
    kills:
      participants
        .flatMap((participant) => participant.kills)
        .sort((prevKills, currentKills) => currentKills - prevKills)
        .findIndex((kills) => kills === props.participant.kills) + 1,
    deaths:
      participants
        .flatMap((participant) => participant.deaths)
        .sort((prevDeaths, currentDeaths) => currentDeaths - prevDeaths)
        .findIndex((deaths) => deaths === props.participant.deaths) + 1,
    assists:
      participants
        .flatMap((participant) => participant.assists)
        .sort((prevAssists, currentAssists) => currentAssists - prevAssists)
        .findIndex((assists) => assists === props.participant.assists) + 1,
    cs:
      participants
        .flatMap(
          (participant) =>
            participant.totalMinionsKilled + participant.neutralMinionsKilled
        )
        .sort((prevCs, currentCs) => currentCs - prevCs)
        .findIndex(
          (cs) =>
            cs ===
            props.participant.totalMinionsKilled +
              props.participant.neutralMinionsKilled
        ) + 1,
    ward:
      participants
        .flatMap(
          (participant) =>
            participant.wardsPlaced +
            participant.detectorWardsPlaced +
            participant.wardsKilled +
            participant.visionScore
        )
        .sort((prevWard, currentWard) => currentWard - prevWard)
        .findIndex(
          (ward) =>
            ward ===
            props.participant.wardsPlaced +
              props.participant.detectorWardsPlaced +
              props.participant.wardsKilled +
              props.participant.visionScore
        ) + 1,
  };

  return (
    <div
      className="flex justify-center cursor-pointer select-none w-72"
      onClick={() => {
        setRankedScoreToggle();
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
                ? "시야"
                : "CS"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-xl font-extrabold">
            <td>
              <ScoreItem
                rank={scoreRank.kills}
                score={props.participant.kills}
                isRanked={isRankedScore}
              />
            </td>
            <td className="text-red-600">
              <ScoreItem
                rank={scoreRank.deaths}
                score={props.participant.deaths}
                isRanked={isRankedScore}
              />
            </td>
            <td>
              <ScoreItem
                rank={scoreRank.assists}
                score={props.participant.assists}
                isRanked={isRankedScore}
              />
            </td>
            <td>
              <div className="flex gap-1 justify-center">
                <ScoreItem
                  rank={
                    props.participant.individualPosition === "UTILITY"
                      ? scoreRank.ward
                      : scoreRank.cs
                  }
                  score={
                    props.participant.individualPosition === "UTILITY"
                      ? props.participant.wardsPlaced +
                        props.participant.detectorWardsPlaced +
                        props.participant.wardsKilled +
                        props.participant.visionScore
                      : props.participant.totalMinionsKilled +
                        props.participant.neutralMinionsKilled
                  }
                  isRanked={isRankedScore}
                />
              </div>
            </td>
          </tr>
          <tr className="text-xs">
            <td colSpan={3}>
              <div className="flex gap-3 justify-center">
                <div>{`평점 ${
                  isNaN(killAverage)
                    ? 0
                    : isFinite(killAverage)
                    ? killAverage.toFixed(2)
                    : "Perfect"
                }`}</div>
                <div>{`킬관여 ${isNaN(killEngage) ? 0 : killEngage}%`}</div>
              </div>
            </td>
            <td>
              {(props.participant.individualPosition === "UTILITY"
                ? props.participant.wardsPlaced /
                  Math.floor((props.gameDuration % 3600) / 60)
                : (props.participant.totalMinionsKilled +
                    props.participant.neutralMinionsKilled) /
                  Math.floor((props.gameDuration % 3600) / 60)
              ).toFixed(1)}
              /분
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ScoreItem(props: { rank: number; score: number; isRanked: boolean }) {
  return (
    <div className="flex gap-1 justify-center">
      {props.isRanked ? props.rank : props.score}
      {props.isRanked ? (
        <div className="text-xs font-semibold self-end mb-[4px]">등</div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MatchScoreBoard;
