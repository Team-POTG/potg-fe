import { css } from "@emotion/css";
import React from "react";
import RoundedImage from "../../common/RoundedImage";
import MatchHistory from "./MatchHistory";
import CurrentGameBannedChampion from "./CurrentGameBannedChapion";
import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";

interface Props {
  championId: number;
  summonerName: string;
}

const styles = {
  self: css`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    width: 100%;
    color: #333333;
    place-items: center;
  `,
  summonerInfo: {
    self: css`
      display: inherit;
      flex-direction: column;
    `,
    name: css`
      font-size: 0.8rem;
      width: 100px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `,
    rank: css`
      font-size: 0.6rem;
    `,
  },
  championInfo: {
    self: css`
      display: inherit;
      place-items: center;
      gap: 5px;
    `,
    playStyleCover: {
      self: css`
        display: flex;
        gap: 2px;
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
  },
};

function CurrentGameSummonerProfile(props: Props) {
  const test = {
    perk: [0, 0],
    spell: [0, 0],
  };

  const puuid = useRecoilValue(accountState);

  return (
    <div className={styles.self}>
      <div className={styles.championInfo.self}>
        <RoundedImage
          image={
            "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png"
          }
          radius={10}
          width={40}
          height={40}
          innerImageScale={1.2}
        />
        <div className={styles.championInfo.playStyleCover.self}>
          <div className={styles.championInfo.playStyleCover.perk}>
            {test.perk.map(() => (
              <RoundedImage
                image={
                  "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerFlash.png"
                }
                radius={5}
                width={17}
                height={17}
              />
            ))}
          </div>
          <div className={styles.championInfo.playStyleCover.spell}>
            {test.spell.map(() => (
              <RoundedImage
                image={
                  "https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerFlash.png"
                }
                radius={3}
                width={17}
                height={17}
              />
            ))}
          </div>
        </div>
        <div className={styles.summonerInfo.self}>
          <div className={styles.summonerInfo.name}>{props.summonerName}</div>
          <div className={styles.summonerInfo.rank}>그랜드마스터</div>
        </div>
      </div>
      {/* <div
        className={css`
          display: inherit;
          gap: 10px;
          place-items: center;
        `}
      > */}
      <MatchHistory />
      <CurrentGameBannedChampion />
      {/* </div> */}
    </div>
  );
}

export default CurrentGameSummonerProfile;
