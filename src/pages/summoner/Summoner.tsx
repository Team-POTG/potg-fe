import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../components/summoners/Profile/Profile";
import Matches from "../../components/summoners/Matches/Matches";
import CurrentGame from "../../components/summoners/CurrentGame/CurrentGame";
import useFetch from "../../hooks/useFetch";

function Summoner() {
  const location = useLocation();
  const fetch = useFetch();

  useEffect(() => {
    fetch?.matches.refetch();
    fetch?.riot.refetch();
  }, [location, fetch]);

  // if (fetch?.riot) return <>로딩</>;
  // if (fetch?.riot.data?.account.puuid === undefined)
  // return <>알수없는 사용자입니다.</>;
  if (fetch?.isLoading) <></>;
  return (
    <div className="flex flex-col gap-7">
      <Profile
        summonerName={fetch?.riot?.data.account.gameName}
        profileIconId={fetch?.riot?.data.summoner.profileIconId}
        puuid={fetch?.riot?.data.summoner.puuid}
        level={fetch?.riot?.data.summoner.summonerLevel}
      />
      {fetch?.riot?.data.spectator === undefined ? (
        <></>
      ) : (
        <CurrentGame spectator={fetch?.riot.data.spectator} />
      )}
      <Matches matches={fetch?.matches.data} />
    </div>
  );
}

export default Summoner;
