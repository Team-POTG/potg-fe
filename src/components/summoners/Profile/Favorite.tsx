import React from "react";
import FavoriteIcon from "../../../images/icons/favorite_normal.png";
import { css } from "@emotion/css";

const styles = {
  self: css`
    display: felx;
    background-color: #f5f5f5;
    border-radius: 5px;
    padding: 4px;
    font-size: 0.75em;
  `,
  div: css`
    display: flex;
    gap: 2px;
  `,
  icon: css`
    width: 20px;
    height: 20px;
    /* filter: drop-shadow(1px 0 0 black); */
  `,
};

function Favorite() {
  return (
    <button className={styles.self}>
      <div className={styles.div}>
        즐겨찾기 <img className={styles.icon} src={FavoriteIcon} />
      </div>
    </button>
  );
}

export default Favorite;
