import React, { useContext } from "react";
import { ITEM_IMAGE_CDN } from "../../../config/host";
import { css, cx } from "@emotion/css";
import { Inventory } from "../../../types/inventory";

interface Props {
  inventory: Inventory;
  alignType: "horizontal" | "inGameInventoryStyle";
  style?: { size?: number; gap?: number };
}

const styles = {
  self: css`
    display: grid;
    width: fit-content;
  `,
  item: css`
    background-color: #e5e7eb;

    border-radius: 6px;

    overflow: hidden;
  `,
  align: {
    horizontal: css`
      grid-auto-flow: column;
      /* grid-template-columns: repeat(6, 1fr); */
    `,
    inGameInventoryStyle: css`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    `,
  },
};

function GameItemInventory(props: Props) {
  let sortedInventory: Array<number> = [];
  let alignStyle: string;

  switch (props.alignType) {
    case "horizontal":
      sortedInventory = [
        props.inventory.item0,
        props.inventory.item1,
        props.inventory.item2,
        props.inventory.item3,
        props.inventory.item4,
        props.inventory.item5,
        props.inventory.item6,
      ];
      alignStyle = styles.align.horizontal;
      break;
    case "inGameInventoryStyle":
      sortedInventory = [
        props.inventory.item0,
        props.inventory.item1,
        props.inventory.item2,
        props.inventory.item6,
        props.inventory.item3,
        props.inventory.item4,
        props.inventory.item5,
      ];
      alignStyle = styles.align.inGameInventoryStyle;
      break;
  }

  return (
    <div
      className={cx(
        styles.self,
        alignStyle,
        css`
          grid-gap: ${props.style?.gap ?? 4}px;
        `
      )}
    >
      {sortedInventory.map((itemId, index) => {
        return itemId !== 0 ? (
          <img
            className={cx(
              styles.item,
              css`
                width: ${props.style?.size ?? 32}px;
                height: ${props.style?.size ?? 32}px;
              `
            )}
            src={`${ITEM_IMAGE_CDN}${itemId}.png`}
            alt="item"
            loading="lazy"
          />
        ) : (
          <div className={styles.item}></div>
        );
      })}
    </div>
  );
}

export default GameItemInventory;
