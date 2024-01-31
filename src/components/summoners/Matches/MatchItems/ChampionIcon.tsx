import React, { useContext } from "react";
import { CHAMPION_IMAGE_CDN } from "../../../../config/host";

function ChampionIcon(props: { championName: string }) {
  return (
    <div className="flex h-[68px] w-[68px] rounded-xl overflow-hidden items-center">
      <img
        className="h-[78px] w-[78px] object-cover"
        src={`${CHAMPION_IMAGE_CDN}${props.championName}.png`}
        alt="champion"
        loading="lazy"
      />
    </div>
  );
}

export default ChampionIcon;
