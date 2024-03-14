import React from "react";
import RoundedImage from "../../common/RoundedImage";
import { css } from "@emotion/css";
import { RecentDto } from "../../../models/models/RecentDto";

interface Props {
  recentMatch: RecentDto[];
}

const styles = {
  self: css`
    display: flex;
    gap: 2px;
    flex-direction: row-reverse;
    font-size: 12px;
  `,
};

function MatchHistory(props: Props) {
  return (
    <div className={styles.self}>
      {props.recentMatch.length > 0 ? (
        props.recentMatch.map((match, index) => (
          <RoundedImage
            key={index}
            image={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${match.championName}.png`}
            radius={99}
            width={25}
            height={25}
            innerImageScale={1.1}
          />
        ))
      ) : (
        <>갱신이 필요합니다</>
      )}
    </div>
  );
}

export default MatchHistory;
