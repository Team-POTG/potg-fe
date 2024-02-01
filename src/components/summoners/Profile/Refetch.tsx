import { css } from "@emotion/css";
import React from "react";

const styles = {
  self: css`
    background-color: rgb(34 197 94);
    border-radius: 5px;
    padding: 4px;
    color: white;
    font-size: 0.75em;
    width: 56px;
  `,
};

function Refetch() {
  return <button className={styles.self}>전적 갱신</button>;
}

export default Refetch;
