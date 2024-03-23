import React from "react";
import RoundedImage from "../common/RoundedImage";
import { css, cx } from "@emotion/css";
import { LeagueEntryDto } from "../../models";
import RankHandler from "../../tools/rankHandler";
import { useNavigate } from "react-router-dom";

interface Props {
  championId: number;
  championName: string;
  championLevel?: number;

  tagLine?: string;
  gameName?: string;

  leagues?: LeagueEntryDto[];

  summonerLevel?: number;

  championIcon?: { size?: number; borderRadius?: number };
  playStyleIcon?: { size?: number; borderRadius?: number; gap?: number };
}

const styles = {
  self: css`
    display: flex;
    gap: 5px;
    place-items: center;
    /* display: flex;
    gap: 5px; */
    /* flex-direction: column; */
  `,
  championInfo: {
    // self: css`
    //   display: inherit;
    //   place-items: center;
    //   gap: 5px;
    // `,
    cover: css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
      /* grid-gap: 2px; */

      place-self: center;
    `,
    perk: css`
      display: inherit;
      flex-direction: column;
      gap: 2px;
    `,
    spell: css`
      display: inherit;
      flex-direction: column;
      gap: 2px;
    `,
  },
  summonerInfo: {
    self: css`
      display: inherit;
      flex-direction: column;
    `,
    name: css`
      font-size: 0.8rem;
      width: 80px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: start;

      :hover {
        cursor: pointer;
        text-decoration-line: underline;
      }
    `,
    rank: css`
      width: 100px;
      font-size: 0.6rem;
      text-align: start;
    `,
  },
};

function PlayedChampionInfo(props: Props) {
  const navigate = useNavigate();

  const test = {
    perk: [0, 0],
    spell: [0, 0],
  };

  const league = props.leagues
    ?.filter((league) => league.queueType === "RANKED_SOLO_5x5")
    .at(0);

  const leagueHandler = new RankHandler(
    league?.tier ?? "",
    league?.rank ?? "",
    league?.leaguePoints ?? 0
  );

  return (
    <div className={styles.self}>
      <RoundedImage
        image={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${props.championName}.png`}
        radius={props.championIcon?.borderRadius ?? 10}
        width={props.championIcon?.size ?? 40}
        height={props.championIcon?.size ?? 40}
        innerImageScale={1.2}
      />
      <div
        className={cx(
          styles.championInfo.cover,
          css`
            grid-gap: ${props.playStyleIcon?.gap ?? 2}px;
          `
        )}
      >
        {test.perk.map((value, index) => (
          <RoundedImage
            key={index}
            image={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerFlash.png`}
            radius={props.playStyleIcon?.borderRadius ?? 3}
            width={props.playStyleIcon?.size ?? 17}
            height={props.playStyleIcon?.size ?? 17}
          />
        ))}
        {test.spell.map((value, index) => (
          <RoundedImage
            key={index}
            image={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/Ignite.png`}
            radius={props.playStyleIcon?.borderRadius ?? 3}
            width={props.playStyleIcon?.size ?? 17}
            height={props.playStyleIcon?.size ?? 17}
          />
        ))}
      </div>
      {props.gameName && props.tagLine ? (
        <div className={styles.summonerInfo.self}>
          <div
            className={styles.summonerInfo.name}
            onClick={() => {
              navigate(`/${props.gameName}#${props.tagLine}`);
            }}
          >
            {props.gameName}
          </div>
          <div className={styles.summonerInfo.rank}>
            {`${leagueHandler.getTierName()} ${leagueHandler.getRank()} */}
            {/* ${leagueHandler.getLeaguePoint()}LP`}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default PlayedChampionInfo;
