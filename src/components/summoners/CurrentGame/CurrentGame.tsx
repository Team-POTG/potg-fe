import { css, cx } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { CurrentGameInfo } from "../../../models/models/CurrentGameInfo";
import CurrentGameSummonerProfile from "./CurrentGameSummonerProfile";
import CurrentGameTeamName from "./CurrentGameTeamName";

interface Props {
  spectator: CurrentGameInfo;
}

const styles = {
  self: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
  `,
  gameInfo: {
    self: css`
      display: flex;
      gap: 8px;
    `,
    type: css`
      display: flex;
      width: fit-content;
      padding: 4px 6px 4px 6px;
      font-size: 14px;
      font-weight: bold;
      background-color: #555555;
      color: white;
      border-radius: 8px;
    `,
    duration: css`
      font-size: 13px;
      align-self: center;
    `,
  },
  matchInfo: {
    teams: css`
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
      grid-row-gap: 5px;
      grid-column-gap: 20px;
    `,
    participants: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-auto-flow: column;
      grid-column-gap: 15px;
      /* grid-row-gap: 2px; */
      /* background-color: gray; */
      grid-column: span 2;
    `,
    bannedChampion: css`
      display: flex;
      grid-column: span 2;
      gap: 3px;
      justify-content: center;
      place-items: center;
    `,
    participant: css`
      display: flex;
      justify-content: space-between;
    `,
    teamName: css`
      display: flex;
      /* margin-left: 10px; */
      /* margin-right: 30px; */
      /* width: fit-content; */
      font-weight: bold;
      color: white;
      padding: 2px 6px 2px 6px;
      border-radius: 8px;
    `,
  },
};

function CurrentGame(props: Props) {
  const [gameDuration, setGameDuration] = useState(props.spectator.gameLength);
  const gameDuration_Hours = Math.floor(gameDuration / 3600);
  const gameDuration_Minutes = Math.floor(
    (gameDuration - gameDuration_Hours * 3600) / 60
  );
  const gameDuration_Seconds =
    gameDuration - gameDuration_Hours * 3600 - gameDuration_Minutes * 60;

  useEffect(() => {
    const duration = setInterval(() => {
      console.log(gameDuration);
      setGameDuration(gameDuration + 1);
    }, 1000);

    return () => clearInterval(duration);
  }, [gameDuration]);

  return (
    <div className={styles.self}>
      <div className={styles.gameInfo.self}>
        <div className={styles.gameInfo.type}>자유랭크</div>
        <div className={styles.gameInfo.duration}>{`${
          gameDuration_Hours > 0 ? `${gameDuration_Hours}시간` : ``
        } ${gameDuration_Minutes}분 ${gameDuration_Seconds}초`}</div>
      </div>
      <div className={styles.matchInfo.teams}>
        <div
          className={cx(
            styles.matchInfo.teamName,
            css`
              background-color: rgb(14 165 233);
            `
          )}
        >
          블루팀
        </div>
        <div
          className={cx(
            styles.matchInfo.teamName,
            css`
              background-color: rgb(244 63 94);
            `
          )}
        >
          레드팀
        </div>
        <div className={styles.matchInfo.participants}>
          {/* <div
            className={css`
              grid-column: 1;
              grid-row: 1;
            `}
          >
            정보
          </div>
          <div
            className={css`
              grid-column: 2;
              grid-row: 1;
            `}
          >
            최근 사용
          </div>
          <div
            className={css`
              grid-column: 3;
              grid-row: 1;
            `}
          >
            금지
          </div>
          <div
            className={css`
              grid-column: 4;
              grid-row: 1;
            `}
          >
            정보
          </div>
          <div
            className={css`
              grid-column: 5;
              grid-row: 1;
            `}
          >
            최근 사용
          </div>
          <div
            className={css`
              grid-column: 6;
              grid-row: 1;
            `}
          >
            금지
          </div> */}
          {props.spectator.participants.map((participant) => (
            <div
              className={styles.matchInfo.participant}
              key={participant.puuid}
            >
              <CurrentGameSummonerProfile {...participant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentGame;
