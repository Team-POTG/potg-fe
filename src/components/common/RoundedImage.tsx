import { css } from "@emotion/css";
import React from "react";

interface Props {
  name?: string;
  image: string;
  radius: number;
  width: number;
  height: number;
  innerImageScale?: number;
}

function RoundedImage(props: Props) {
  const styles = {
    cover: css`
      width: ${props.width}px;
      height: ${props.height}px;
      border-radius: ${props.radius}px;
      overflow: hidden;
    `,
    innerImage: css`
      transform: scale(${props.innerImageScale});
    `,
  };

  return (
    <div className={styles.cover}>
      <img className={styles.innerImage} src={props.image} alt={props.name} />
    </div>
  );
}

export default RoundedImage;
