import React from "react";

/**
 *
 * @param props.name 소환사 이름
 * @returns
 */
function SummonerName(props: { name: string | undefined }) {
  return <p className="font-bold">{props.name}</p>;
}

export default SummonerName;
