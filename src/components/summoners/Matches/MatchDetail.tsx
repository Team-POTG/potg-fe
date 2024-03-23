import { css, cx } from "@emotion/css";
import React from "react";
import { MatchDto } from "../../../gql/graphql";
import MatchDetailProfile from "./MatchDetailProfile";

const styles = {
  self: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: column;
    grid-gap: 15px;

    padding: 16px;
    margin-top: 6px;
    background-color: rgb(244, 244, 244);
    border-radius: 6px;
  `,
  detail: {
    teamDiv: css``,
  },
};

function MatchDetail(props: MatchDto) {
  return (
    <div className={styles.self}>
      <div
        className={cx(
          styles.detail.teamDiv,
          css`
            grid-column: 1;
            grid-row: 1;
          `
        )}
      >
        패배
      </div>
      <div
        className={cx(
          styles.detail.teamDiv,
          css`
            grid-column: 2;
            grid-row: 1;
          `
        )}
      >
        승리
      </div>
      {props.info.participants.map((participant) => (
        <MatchDetailProfile
          tagLine={participant.riotIdTagline}
          gameName={participant.riotIdGameName}
          championId={participant.championId}
          championName={participant.championName}
          championLevel={participant.champLevel}
          leagues={[]}
          inventory={{
            item0: participant.item0,
            item1: participant.item1,
            item2: participant.item2,
            item3: participant.item3,
            item4: participant.item4,
            item5: participant.item5,
            item6: participant.item6,
          }}
          kills={participant.kills}
          deaths={participant.deaths}
          assists={participant.assists}
          totalMinionsKilled={participant.totalMinionsKilled}
          neutraMinionsKilled={participant.neutralMinionsKilled}
          wardsPlaced={participant.wardsPlaced}
          detectorWardsPlaced={participant.detectorWardsPlaced}
          wardsKilled={participant.wardsKilled}
          visionScore={participant.visionScore}
        />
      ))}
    </div>
  );
}

export default MatchDetail;
