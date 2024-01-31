import SummonerInfo from "../../../types/summonerProfile";
import Icon from "./Icon";
import Level from "./Level";
import Name from "./Name";
import Tier from "./Tier";
import RecentMatchRate from "./RecentMatchRate";
import RecentUseChampion from "./RecentUseChampion";

interface Props {
  summonerName?: string;
  profileIconId?: number;
  puuid?: string;
  level?: number;
}

function Profile(props: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2 bg-white h-64 w-52 justify-center place-items-center p-3 rounded-2xl shadow-box">
        <Icon profileIconId={props?.profileIconId} />
        <div className="flex gap-1 h-fit">
          <Level level={props?.level} />
          <Name name={props?.summonerName} />
        </div>
      </div>
      <div>
        <Tier ranks={undefined} />
      </div>
      <div className="flex flex-col gap-3">
        <RecentMatchRate />
        <RecentUseChampion />
      </div>
    </div>
  );
}

export default Profile;
