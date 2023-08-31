import React from "react";
import Match from "./Match";
import GameTypeCategory from "./GameTypeCategory";
import Analytic from "./Analytic";

function Matches() {
  return (
    <div className="flex flex-col gap-5 text-slate-600">
      <div className="flex gap-1 ml-5 font-bold">
        <p>최근</p>
        <p className="text-orange-500">20게임</p>
        <p>전적</p>
      </div>
      <GameTypeCategory />
      <Analytic />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
    </div>
  );
}

export default Matches;
