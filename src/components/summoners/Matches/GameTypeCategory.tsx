import React, { useState } from "react";
// import CategoryTitle from "./CategoryTitle";

function GameTypeCategory() {
  const [selectedTap, SelectionTap] = useState(1);

  return (
    <ul className="flex items-center bg-white gap-1 rounded-3xl text-sm px-4">
      <li
        className={`${selectedTap === 1 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(1)}
      >
        <CategoryTitle title="전체" />
      </li>
      <div className="border-l border-[#ebebeb] h-[15px]" />
      <li
        className={`${selectedTap === 2 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(2)}
      >
        <CategoryTitle title="솔로 랭크" />
      </li>
      <div className="border-l border-[#ebebeb] h-[15px]" />
      <li
        className={`${selectedTap === 3 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(3)}
      >
        <CategoryTitle title="자유 랭크" />
      </li>
      <div className="border-l border-[#ebebeb] h-[15px]" />
      <li
        className={`${selectedTap === 4 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(4)}
      >
        <CategoryTitle title="일반 게임" />
      </li>
      <div className="border-l border-[#ebebeb] h-[15px]" />
      <li
        className={`${selectedTap === 5 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(5)}
      >
        <CategoryTitle title="칼바람 나락" />
      </li>
      <div className="border-l border-[#ebebeb] h-[15px]" />
      <li
        className={`${selectedTap === 6 ? "font-bold text-orange-400" : ""}`}
        onClick={() => SelectionTap(6)}
      >
        <CategoryTitle title="이벤트 모드" />
      </li>
    </ul>
  );
}

function CategoryTitle(title: { title: string }) {
  return <div className={`cursor-pointer px-4 py-3`}>{title.title}</div>;
}

export default GameTypeCategory;
