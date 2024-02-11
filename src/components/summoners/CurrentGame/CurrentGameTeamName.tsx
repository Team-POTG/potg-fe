import { css } from "@emotion/css";
import React from "react";

interface Props {
  teamName: string;
}

const styles = {
  self: css`
    margin-left: 10px;
  `,
};

function CurrentGameTeamName(props: Props) {
  return <div className={styles.self}>{props.teamName}</div>;
}

export default CurrentGameTeamName;
