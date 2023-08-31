import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import useSummonerHistory from "../../hooks/useSummonerHistory";
import Profile from "../../components/summoners/Profile/Profile";
import Matches from "../../components/summoners/Matches/Matches";

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

  return (
    <div className="flex flex-col gap-7">
      <Profile />
      <Matches />
    </div>
  );
}

export default Summoners;
