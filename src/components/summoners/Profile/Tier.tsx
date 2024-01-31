import React from "react";
import TierHandler from "./tierHandler";

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
      {props.ranks?.map((rankData, index) => {
        switch (index) {
          case 0:
            return <TierItem title="솔로랭크" ranks={rankData} key={"solo"} />;
          case 1:
            return <TierItem title="자유랭크" ranks={rankData} key={"team"} />;
          default:
            return null;
        }
      })}
    </div>
  );
}

function TierItem(props: { title: string; ranks: rank }) {
  let tierInfo = new TierHandler(
    props.ranks.tier,
    props.ranks.rank,
    props.ranks.leaguePoints
  );
  let gameInfo = {
    wins: props.ranks.wins,
    losses: props.ranks.losses,
    total: props.ranks.wins + props.ranks.losses,
    winRate: (props.ranks.wins / (props.ranks.wins + props.ranks.losses)) * 100,
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-slate-700 font-bold">{props.title}</p>
      <img className="h-36 -my-5" src={tierInfo.getImageURL()} alt="" />
      <div className="flex gap-1 text-sm text-slate-600">
        <p>{`${tierInfo.getTierName()} ${tierInfo.getRank()}`}</p>
        <p>{`(${tierInfo.getLeaguePoint()}LP)`}</p>
      </div>
      <div className="flex gap-1 text-xs text-slate-500">
        <p>{gameInfo.total}게임</p>
        <p>{gameInfo.wins}승</p>
        <p>{gameInfo.losses}패</p>
        <p>({gameInfo.winRate.toFixed(0)}%)</p>
      </div>
    </div>
  );
}

export default Tier;
