import React from "react";
import { SUMMONER_IMAGE_CDN } from "../../../config/host";

interface Props {
  /**
   * @property {number} 소환사 아이콘 ID
   */
  profileIconId: number | undefined;
}

function SummonerIcon(props: Props) {
  const style = {
    size: "sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-32 lg:h-32 w-14 h-14",
    rounded: "sm:rounded-lg md:rounded-lg lg:rounded-xl rounded-lg",
  };
  return (
    <div className={style.size}>
      <img
        src={`${SUMMONER_IMAGE_CDN}${props.profileIconId}.png`}
        className={`${style.rounded} `}
        alt=""
        loading="lazy"
      />
    </div>
  );
}

export default SummonerIcon;
