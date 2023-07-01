import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import useSummonerHistory from "../../hooks/useSummonerHistory";

function Summoners() {
  // const [summonerCookie, setSummonerCookie] = useCookies(["summonerHistory"]);
  const [summonerHistory, setSummonerHistory] = useSummonerHistory();
  const routerParam = useParams();

  useEffect(() => {
    setSummonerHistory({
      name: "aaa",
      level: 0,
      rank: 0,
      tier: 0,
      icon: 0,
    });
  }, [setSummonerHistory]);

  return <div>{routerParam.summonerName}</div>;
}

export default Summoners;
