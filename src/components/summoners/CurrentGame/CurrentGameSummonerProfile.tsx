import { css, cx } from "@emotion/css";
import React from "react";
import RoundedImage from "../../common/RoundedImage";
import MatchHistory from "./MatchHistory";
import CurrentGameBannedChampion from "./CurrentGameBannedChapion";
import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import { CurrentGameParticipant } from "../../../models";
import RankHandler from "../../../tools/rankHandler";
import { useNavigate } from "react-router-dom";

const styles = {
  self: css`
    display: flex;
    gap: 15px;
    justify-content: space-between;
    width: 100%;
    color: #333333;
    place-items: center;
    padding: 8px;
    border-radius: 12px;
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

      :hover {
        cursor: pointer;
        text-decoration-line: underline;
      }
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

function CurrentGameSummonerProfile(props: CurrentGameParticipant) {
  const test = {
    perk: [0, 0],
    spell: [0, 0],
  };

  const { puuid } = useRecoilValue(accountState);
  const navigate = useNavigate();

  const league = props.leagues
    .filter((league) => league.queueType === "RANKED_SOLO_5x5")
    .at(0);
  const leagueHandler = new RankHandler(
    league?.tier ?? "",
    league?.rank ?? "",
    league?.leaguePoints ?? 0
  );

  return (
    <div
      className={cx(
        styles.self,
        css`
          ${props.puuid === puuid ? "background: #e6e6e6;" : ""}
        `
      )}
    >
      <div className={styles.championInfo.self}>
        <RoundedImage
          image={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png`}
          radius={10}
          width={40}
          height={40}
          innerImageScale={1.2}
        />
        <div className={styles.championInfo.playStyleCover.self}>
          <div className={styles.championInfo.playStyleCover.perk}>
            {test.perk.map((value, index) => (
              <RoundedImage
                key={index}
                image={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerFlash.png`}
                radius={5}
                width={17}
                height={17}
              />
            ))}
          </div>
          <div className={styles.championInfo.playStyleCover.spell}>
            {test.spell.map((value, index) => (
              <RoundedImage
                key={index}
                image={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/SummonerFlash.png`}
                radius={3}
                width={17}
                height={17}
              />
            ))}
          </div>
        </div>
        <div className={styles.summonerInfo.self}>
          <div
            className={styles.summonerInfo.name}
            onClick={() => {
              navigate(`/${props.account.gameName}#${props.account.tagLine}`);
            }}
          >
            {props.account.gameName}
          </div>
          <div className={styles.summonerInfo.rank}>
            {`${leagueHandler.getTierName()} ${leagueHandler.getRank()}
            ${leagueHandler.getLeaguePoint()}LP`}
          </div>
        </div>
      </div>

      <MatchHistory recentMatch={props.recentMatches} />
      <CurrentGameBannedChampion />
    </div>
  );
}

export default CurrentGameSummonerProfile;
