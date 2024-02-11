import React from "react";
import RoundedImage from "../../common/RoundedImage";
import { css } from "@emotion/css";

interface Props {}

const styles = {
  self: css`
    display: flex;
    gap: 2px;
  `,
};

function MatchHistory() {
  const test = [0, 0, 0, 0];
  return (
    <div className={styles.self}>
      {test.map(() => (
        <RoundedImage
          image={
            "http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png"
          }
          radius={99}
          width={25}
          height={25}
          innerImageScale={1.1}
        />
      ))}
    </div>
  );
}

export default MatchHistory;
