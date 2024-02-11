import { css } from "@emotion/css";
import React from "react";
import { CurrentGameInfo } from "../../../models/models/CurrentGameInfo";
import CurrentGameSummonerProfile from "./CurrentGameSummonerProfile";
import CurrentGameTeamName from "./CurrentGameTeamName";
import CurrentGameBannedChampion from "./CurrentGameBannedChapion";

interface Props {
  spectator: CurrentGameInfo;
}

const styles = {
  self: css``,
  div: {
    teams: css`
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
      background-color: white;
      border-radius: 20px;
      padding: 20px;
      grid-row-gap: 5px;
      grid-column-gap: 20px;
    `,
    participants: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-auto-flow: column;
      grid-gap: 20px;
      grid-row-gap: 5px;
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
  },
};

function CurrentGame(props: Props) {
  // console.log(props.spectator.participants.);
  return (
    <div className={styles.div.teams}>
      <div>
        <CurrentGameTeamName teamName={"Blue"} />
      </div>
      <div>
        <CurrentGameTeamName teamName={"Red"} />
      </div>
      <div className={styles.div.participants}>
        {props.spectator.participants.map((participant) => (
          <div className={styles.div.participant}>
            <CurrentGameSummonerProfile
              championId={0}
              summonerName={participant.summonerName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentGame;
