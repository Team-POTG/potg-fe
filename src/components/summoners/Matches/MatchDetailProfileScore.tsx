import { css, cx } from "@emotion/css";
import React, { ReactElement } from "react";

interface Props {
  title: string;
  content: number | string | ReactElement;
  subContent: number | string;

  size?: number;
}

const styles = {
  self: css`
    display: flex;
    flex-direction: column;
  `,
  title: css`
    font-size: 12px;
  `,
  content: css`
    display: flex;
    place-self: center;
    place-items: center;
    height: 20px;

    font-size: 14px;
    font-weight: bold;
  `,
  subContent: css`
    font-size: 9px;
  `,
};

function MatchDetailProfileScore(props: Props) {
  return (
    <div
      className={cx(
        styles.self,
        css`
          width: ${props.size}px;
        `
      )}
    >
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.content}</div>
      {/* <div className={styles.subContent}>{props.subContent}</div> */}
    </div>
  );
}

export default MatchDetailProfileScore;
