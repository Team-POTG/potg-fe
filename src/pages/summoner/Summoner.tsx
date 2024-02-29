import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../components/summoners/Profile/Profile";
import Matches from "../../components/summoners/Matches/Matches";
import CurrentGame from "../../components/summoners/CurrentGame/CurrentGame";
import useFetch from "../../hooks/useFetch";
import useSummonerHistory from "../../hooks/useSummonerHistory";
import { css } from "@emotion/css";

const styles = {
  self: css`
    display: flex;
    flex-direction: column;
    gap: 28px;
  `,
};

function Summoner() {
  const location = useLocation();
  const fetch = useFetch();
  const { addSummonerHistory } = useSummonerHistory();

  useEffect(() => {
    fetch?.matches.refetch();
    fetch?.riot.refetch();

    if (fetch) {
      const leagueSoloData =
        fetch?.riot.data.league?.length === 0
          ? undefined
          : fetch?.riot.data.league?.filter(
              (league) => league.queueType === "RANKED_SOLO_5x5"
            )[0];

      addSummonerHistory({
        puuid: fetch.riot.data.account.puuid,
        gameName: fetch.riot.data.account.gameName,
        tagLine: fetch.riot.data.account.tagLine,
        profileIconId: fetch.riot.data.summoner.profileIconId,
        summonerLevel: fetch.riot.data.summoner.summonerLevel,
        tier: leagueSoloData?.tier ?? "",
        rank: leagueSoloData?.rank ?? "",
        leaguePoint: leagueSoloData?.leaguePoints ?? 0,
      });
    }
  }, [location, fetch]);

  // if (fetch?.riot) return <>로딩</>;
  // if (fetch?.riot.data?.account.puuid === undefined) return <></>;
  if (fetch?.isLoading) <></>;
  return (
    <div className={styles.self}>
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
