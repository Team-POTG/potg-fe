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
  const { fetch, refetch, isLoading } = useFetch();
  const { addSummonerHistory } = useSummonerHistory();

  useEffect(() => {
    refetch();

    if (fetch) {
      const leagueSoloData =
        fetch.riot?.league?.length === 0
          ? undefined
          : fetch?.riot?.league?.filter(
              (league) => league.queueType === "RANKED_SOLO_5x5"
            )[0];

      if (fetch.riot)
        addSummonerHistory({
          puuid: fetch.riot.account.puuid,
          gameName: fetch.riot.account.gameName,
          tagLine: fetch.riot.account.tagLine,
          profileIconId: fetch.riot.summoner.profileIconId,
          summonerLevel: fetch.riot.summoner.summonerLevel,
          tier: leagueSoloData?.tier ?? "",
          rank: leagueSoloData?.rank ?? "",
          leaguePoint: leagueSoloData?.leaguePoints ?? 0,
        });
    }

    return;
  }, [location, fetch]);

  // if (fetch?.riot) return <>로딩</>;
  // if (fetch?.riot.data?.account.puuid === undefined) return <></>;
  // if (isLoading) <></>;
  return (
    <div className={styles.self}>
      <Profile
        summonerName={fetch?.riot?.account.gameName}
        profileIconId={fetch?.riot?.summoner.profileIconId}
        puuid={fetch?.riot?.summoner.puuid}
        level={fetch?.riot?.summoner.summonerLevel}
        league={fetch?.riot.league}
      />
      {fetch?.riot?.spectator === undefined ? (
        <></>
      ) : (
        <CurrentGame spectator={fetch?.riot.spectator} />
      )}
      <Matches matches={fetch?.matches} />
    </div>
  );
}

export default Summoner;
