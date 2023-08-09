import React from "react";

function SummonerLevel(props: { level: number | undefined }) {
  return (
    <p className="p-1 rounded-md bg-neutral-600 text-white text-xs">
      LV.{props.level}
    </p>
  );
}

export default SummonerLevel;
