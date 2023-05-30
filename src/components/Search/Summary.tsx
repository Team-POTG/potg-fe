import React, { useState } from "react";
import Tier from "../../../../images/emblems_mini/Challenger.png";
import { motion } from "framer-motion";

export function Summary() {
  const [summaryHover, setSummaryHover] = useState("");

  return (
    <button
      className={`flex items-center gap-2 py-2 px-3 ${summaryHover} rounded-lg`}
      onMouseEnter={() => setSummaryHover("bg-[#eeeeee]")}
      onMouseLeave={() => setSummaryHover("")}
    >
      <img
        className="sm:w-5 md:w-7 lg:w-10 w-5 rounded-md"
        src="http://ddragon.leagueoflegends.com/cdn/13.8.1/img/profileicon/588.png"
        alt="icon"
      />
      {/* <img className="sm:w-4 md:w-7 w-4 md:hidden" src={Tier} alt="tier" /> */}
      <p className="sm:text-[10px] md:text-xs lg:text-sm text-[10px] font-bold">
        우월한기럭지
      </p>
      <p className="sm:text-[8px] md:text-[10px] lg:text-[12px] text-[8px]">
        플래티넘4 - 75LP
      </p>
    </button>
  );
}

export function SummaryTemplate() {
  return (
    <div className="flex flex-col gap-1 sm:pb-2 md:px-4 md:pb-6 pb-2">
      {/* <Summary />
      <Summary />
      <Summary />
      <Summary />
      <Summary /> */}
    </div>
  );
}
