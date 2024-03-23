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
import PlayedChampionInfo from "../PlayedChampionInfo";

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
      {/* <div className={styles.championInfo.self}> */}
      <PlayedChampionInfo
        championId={0}
        championName={""}
        tagLine={props.account.tagLine}
        gameName={props.account.gameName}
        leagues={props.leagues}
        summonerLevel={0}
      />
      {/* </div> */}

      <MatchHistory recentMatch={props.recentMatches} />
      <CurrentGameBannedChampion />
    </div>
  );
}

export default CurrentGameSummonerProfile;
