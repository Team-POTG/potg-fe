import React from "react";

function RecentUseChampion() {
  return (
    <div className="flex flex-col justify-center gap-3 p-4 rounded-xl h-[122px] w-60 bg-white">
      <UseChapionItem />
      <UseChapionItem />
    </div>
  );
}

function UseChapionItem() {
  return (
    <div className="flex gap-2 place-items-center">
      <img
        src="http://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/Aatrox.png"
        className="w-8 rounded-full"
        alt=""
      />
      <div className="flex flex-col">
        <p className="text-sm font-bold">ㅇㅇ</p>
        <p className="text-xs">32게임 (1승 2패)</p>
      </div>
    </div>
  );
}

export default RecentUseChampion;
