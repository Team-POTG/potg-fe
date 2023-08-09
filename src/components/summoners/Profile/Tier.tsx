import React, { useEffect } from "react";
import Challenger from "../../../images/emblems/Challenger.png";
import GrandMaster from "../../../images/emblems/Grandmaster.png";
import Master from "../../../images/emblems/Master.png";
import Diamond from "../../../images/emblems/Diamond.png";
import Platinum from "../../../images/emblems/Platinum.png";
import Gold from "../../../images/emblems/Gold.png";
import Silver from "../../../images/emblems/Silver.png";
import Bronze from "../../../images/emblems/Bronze.png";
import Iron from "../../../images/emblems/Iron.png";
import SummonerInfo from "../../../types/summonerProfile";
import TierHandler from "../../../handler/rank/tierHandler";

type rank = {
  leagueId: string;
  queueType: string;
  tier: number;
  rank: number;
  leaguePoints: number;
  wins: number;
  losses: number;
  miniSeries: {
    losses: number;
    progress: string;
    target: number;
    wins: number;
  };
};

function Tier(props: { ranks: rank[] | undefined }) {
  return (
    <div className="grid grid-cols-2 w-[550px] h-64 rounded-xl bg-white items-center justify-items-center">
      {props.ranks?.map((rankData) => {
        return <TierItem title="d" ranks={rankData} />;
      })}
      {/* <TierItem title="" ranks={props.ranks![0]} />
      <TierItem title="" ranks={props.ranks![1]} /> */}
    </div>
  );
}

function TierItem(props: { title: string; ranks: rank }) {
  let tierInfo = new TierHandler();
  //   props.ranks[0].tier,
  //   props.ranks[0].rank,
  //   props.ranks[0].leaguePoints
  // );

  return (
    <div className="flex flex-col items-center gap-2">
      <img className="h-36 -my-5" src={Challenger} alt="" />
      <p className="h-4">{`${tierInfo.getTierName(
        props.ranks.tier
      )} ${tierInfo.getTierName(props.ranks.leaguePoints)}`}</p>
      {/* <p className="h-4">{tierInfo.getLeaguePoint()}</p> */}
    </div>
  );
}

export default Tier;
