import React from "react";
import { LeagueEntryDto } from "../../../models";
import { css } from "@emotion/css";
import RankHandler from "./rankHandler";

const styles = {
  self: css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 550px;
    height: 256px;
    border-radius: 12px;
    background-color: white;
    align-items: center;
  `,
  item: {
    self: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    `,
    queueType: css`
      color: rgb(51 65 85);
      font-weight: bold;
    `,
    emblemImage: css`
      height: 144px;
      margin-top: -20px;
      margin-bottom: -20px;
    `,
    rankStatus: css`
      display: flex;
      gap: 4px;
      font-size: 14px;
      color: rgb(71 85 105);
    `,
    rankStats: css`
      display: flex;
      gap: 4px;
      font-size: 12px;
      color: rgb(100 116 139);
    `,
  },
};

function Rank(props: { ranks: LeagueEntryDto[] | undefined }) {
  return (
    <div className={styles.self}>
      {props.ranks?.map((rankData, index) => {
        const rankHandler = new RankHandler(
          rankData.tier,
          rankData.rank,
          rankData.leaguePoints
        );

        const queueType =
          rankData.queueType === "RANKED_SOLO_5x5" ? "솔로랭크" : "자유랭크";

        return (
          <div className={styles.item.self}>
            <p className={styles.item.queueType}>{queueType}</p>
            <img
              className={styles.item.emblemImage}
              src={rankHandler.getImageURL()}
              alt=""
            />
            <div className={styles.item.rankStatus}>
              <p>{`${rankHandler.getTierName()} ${rankHandler.getRank()}`}</p>
              <p>{`(${rankHandler.getLeaguePoint()}LP)`}</p>
            </div>
            <div className={styles.item.rankStats}>
              <p>{rankData.wins + rankData.losses}게임</p>
              <p>{rankData.wins}승</p>
              <p>{rankData.losses}패</p>
              <p>
                (
                {(
                  (rankData.wins / (rankData.wins + rankData.losses)) *
                  100
                ).toFixed(0)}
                %)
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rank;
