import { css, cx } from "@emotion/css";
import React from "react";

function MatchDetailButton(props: {
  isWin: boolean | undefined;
  onClick?: () => void;
}) {
  const styles = {
    self: css`
      font-size: 12px;
      justify-content: center;
      border-radius: 6px;
      padding: 2px;
    `,
  };

  return (
    <button
      className={cx(
        styles.self,
        css`
          ${props.isWin
            ? `background-color:rgb(147 197 253);`
            : `background-color:rgb(252 165 165);`}
        `
      )}
      onClick={props.onClick}
    >
      자세히
    </button>
  );
}

export default MatchDetailButton;
