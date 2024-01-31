import React, { useContext } from "react";
import { ITEM_IMAGE_CDN } from "../../../../config/host";

type Inventory = {
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
};

function ItemList(props: { items: Inventory }) {
  const sortedInventory = [
    props.items.item0,
    props.items.item1,
    props.items.item2,
    props.items.item6,
    props.items.item3,
    props.items.item4,
    props.items.item5,
  ];

  return (
    <div className="grid grid-cols-4 gap-1">
      {}
      {sortedInventory.map((itemId) => {
        return <Item itemId={itemId} />;
      })}
    </div>
  );
}

function Item(props: { itemId?: number }) {
  return (
    <div className="w-8 h-8 bg-gray-200 rounded-md overflow-hidden">
      {props.itemId !== 0 ? (
        <img
          src={`${ITEM_IMAGE_CDN}${props.itemId}.png`}
          alt="item"
          loading="lazy"
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemList;
