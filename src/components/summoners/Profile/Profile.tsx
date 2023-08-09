import React, { useEffect, useState } from "react";
import { SummonerApiFactory } from "../../../models";
import SummonerInfo from "../../../types/summonerProfile";
import { useParams } from "react-router-dom";
import Icon from "./Icon";
import Level from "./Level";
import Name from "./Name";
import Tier from "./Tier";
import RecentMatchRate from "./RecentMatchRate";
import RecentUseChampion from "./RecentUseChampion";

function Profile() {
  const [summonerInfo, setSummonerInfo] = useState<SummonerInfo>();
  const routerParam = useParams();

  useEffect(() => {
    SummonerApiFactory()
      .getSummoner(routerParam.summonerName ?? "", "kr")
      .then((data) =>
        setSummonerInfo({
          summonerName: data.data.name,
          profileIconId: data.data.profileIconId,
          level: data.data.level,
          ranks: data.data.ranks,
        })
      );
  }, [routerParam.summonerName]);

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2 bg-white h-64 w-52 justify-center place-items-center p-3 rounded-2xl shadow-box">
        <Icon profileIconId={summonerInfo?.profileIconId} />
        <div className="flex gap-1 h-fit">
          <Level level={summonerInfo?.level} />
          <Name name={summonerInfo?.summonerName} />
        </div>
      </div>
      <div>
        <Tier ranks={summonerInfo?.ranks} />
      </div>
      <div className="flex flex-col gap-3">
        <RecentMatchRate />
        <RecentUseChampion />
      </div>
    </div>
  );
}

export default Profile;
