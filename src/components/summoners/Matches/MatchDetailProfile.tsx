import React from "react";
import { css } from "@emotion/css";

import PlayedChampionInfo from "../PlayedChampionInfo";
import { LeagueEntryDto } from "../../../models";
import GameItemInventory from "./GameItemInventory";
import { Inventory } from "../../../types/inventory";
import {
  getKdaRatio,
  getTotalMinionKilledScore,
} from "../../../tools/matchScore";
import MatchDetailProfileScore from "./MatchDetailProfileScore";

interface Props {
  isNavigatedSummoner?: boolean;

  championName: string;
  championId: number;
  championLevel: number;
  inventory: Inventory;

  kills: number;
  deaths: number;
  assists: number;
  totalMinionsKilled: number;
  neutraMinionsKilled: number;
  wardsPlaced: number;
  detectorWardsPlaced: number;
  wardsKilled: number;
  visionScore: number;

  tagLine: string;
  gameName: string;

  leagues: LeagueEntryDto[];
}

const styles = {
  self: css`
    display: flex;
    justify-content: space-around;
    place-items: center;
    /* gap: 5px; */

    font-size: 12px;
  `,
  score: css`
    display: flex;

    width: 200px;
    gap: 15px;
  `,
  championInfo: {
    self: css`
      display: flex;
      width: fit-content;
      gap: 2px;
    `,
    playStyle: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 1px;

      place-self: center;
    `,
  },
};

function MatchDetailProfile(props: Props) {
  return (
    <div className={styles.self}>
      <div className={styles.championInfo.self}>
        <PlayedChampionInfo
          championId={props.championId}
          championName={props.championName}
          championLevel={props.championLevel}
          tagLine={props.tagLine}
          gameName={props.gameName}
          leagues={[]}
          summonerLevel={props.championLevel}
          playStyleIcon={{ size: 15 }}
          championIcon={{ size: 40 }}
        />
      </div>
      <div className={styles.score}>
        <MatchDetailProfileScore
          title={"KDA"}
          content={`${props.kills}/${props.deaths}/${props.assists}`}
          subContent={`(${getKdaRatio(
            props.kills,
            props.deaths,
            props.assists
          )})`}
          size={100}
        />
        <MatchDetailProfileScore
          title={"CS"}
          content={getTotalMinionKilledScore(
            props.totalMinionsKilled,
            props.neutraMinionsKilled
          )}
          subContent={""}
          size={40}
        />
        <MatchDetailProfileScore
          title={"피해"}
          content={
            <div
              className={css`
                width: 60px;
                height: 8px;
                background-color: rgb(210 213 218);
                border-radius: 5px;
                overflow: hidden;
              `}
            >
              <div
                className={css`
                  width: 60%;
                  height: 100%;
                  background-color: rgb(221 83 76);
                  border-radius: 5px;
                `}
              />
            </div>
          }
          subContent={""}
          size={80}
        />
      </div>
      <GameItemInventory
        inventory={{
          item0: props.inventory.item0,
          item1: props.inventory.item1,
          item2: props.inventory.item2,
          item3: props.inventory.item3,
          item4: props.inventory.item4,
          item5: props.inventory.item5,
          item6: props.inventory.item6,
        }}
        alignType={"inGameInventoryStyle"}
        style={{ size: 22, gap: 2 }}
      />
    </div>
  );
}

export default MatchDetailProfile;
