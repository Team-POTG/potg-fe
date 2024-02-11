import { css } from "@emotion/css";
import React from "react";
import RoundedImage from "../../common/RoundedImage";

function CurrentGameBannedChampion() {
  return (
    <RoundedImage
      image={
        "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png"
      }
      radius={10}
      width={30}
      height={30}
      innerImageScale={1.1}
    />
  );
}

export default CurrentGameBannedChampion;
