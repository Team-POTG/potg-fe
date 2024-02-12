import React, { useContext } from "react";
import { CHAMPION_IMAGE_CDN } from "../../../config/host";
import { ParticipantDto } from "../../../gql/graphql";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import { ParticipantsContext } from "./Match";

function MatchSummonerList() {
  const account = useRecoilValue(accountState);
  const participants = useContext(ParticipantsContext);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(2, 100px);
          grid-template-rows: repeat(5, auto);
          grid-auto-flow: column;
          grid-row-gap: 2px;
        `}
      >
        {participants.map((participant, index) => (
          <SummonerItem
            key={index}
            championName={participant.championName}
            riotIdGameName={participant.riotIdGameName}
            riotIdTagline={participant.riotIdTagline}
            isFocusedSummoner={participant.puuid === account.puuid}
          />
        ))}
      </div>
    </div>
  );
}

function SummonerItem(props: {
  championId?: number;
  championName?: string;
  isFocusedSummoner?: boolean;
  riotIdGameName: string;
  riotIdTagline: string;
}) {
  return (
    <div className="flex gap-1 items-center">
      <div className="flex h-[20px] w-[20px] rounded-md overflow-hidden items-center">
        <img
          className="h-[22px] w-[22px] object-cover"
          src={`${CHAMPION_IMAGE_CDN}${props.championName}.png`}
          alt="champion"
          loading="lazy"
        />
      </div>
      <Link to={`/${props.riotIdGameName}#${props.riotIdTagline}`}>
        <p
          className={`text-xs w-20 text-start overflow-hidden whitespace-nowrap text-ellipsis ${
            props.isFocusedSummoner ? "font-bold" : ""
          }`}
        >
          {props.riotIdGameName}
        </p>
      </Link>
    </div>
  );
}

export default MatchSummonerList;
