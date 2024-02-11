import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../components/summoners/Profile/Profile";
import Matches from "../../components/summoners/Matches/Matches";
import CurrentGame from "../../components/summoners/CurrentGame/CurrentGame";
import { useQuery } from "@tanstack/react-query";
import { AccountApi } from "../../models/apis/AccountApi";
import { LeagueApi, SummonerApi } from "../../models";
import { useRecoilState } from "recoil";
import { accountState } from "../../recoil/navigate/atom";
import { SpectatorApi } from "../../models/apis/SpectatorApi";

function Summoner() {
  const location = useLocation();
  // 쓸데없는 re-render 줄이기
  const [, setAccount] = useRecoilState(accountState);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["summonerData"],
    queryFn: async () => {
      const account = await new AccountApi()
        .getAccountByGameNameWithTagLine({
          tagLine: location.hash.replace("#", ""),
          gameName: decodeURI(location.pathname.replace("/", "")),
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      if (account === undefined) return;
      const summoner = await new SummonerApi()
        .getSummonerByPuuid({
          puuid: account.puuid,
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      if (summoner === undefined) return;

      const spectator = await new SpectatorApi()
        .getSpectator({
          summonerId: summoner.id,
          region: "KR",
        })
        .catch(() => {
          return undefined;
        });

      // const league = await new LeagueApi()
      //   .getLeague({
      //     id: summoner.id,
      //     region: "KR",
      //   })
      //   .catch(() => {
      //     return undefined;
      //   });

      return {
        account: account,
        summoner: summoner,
        spectator: spectator,
        // league: league,
      };
    },
  });

  useEffect(() => {
    // if (isLoading) return;
    if (data === undefined) return;
    refetch();
  }, [location, data, refetch]);

  useLayoutEffect(() => {
    if (data === undefined) return;
    setAccount({ puuid: data?.account.puuid, summonerId: data.summoner.id });
  }, [data, setAccount]);

  // const [summonerCookie, setSummonerCookie] = useCookies(["summonerHistory"]);
  // const [summonerHistory, setSummonerHistory] = useSummonerHistory();
  // const routerParam = useParams();
  // const [summonerInfo, setSummonerInfo] = useState<SummonerInfo>(); // TODO: dto로 바꾸기
  // const setNavigatedSummonerPuuid = useSetRecoilState(puuidState);
  // const routerParam = useParams();

  // useEffect(() => {
  //   setSummonerHistory({
  //     name: "aaa",
  //     level: 0,
  //     rank: 0,
  //     tier: 0,
  //     icon: 0,
  //   });
  // }, [setSummonerHistory]);

  // useEffect(() => {
  //   // async function getProfileData() {
  //   //   await new SummonerApi()
  //   //     .getSummonerByPuuid({
  //   //       summonerName: routerParam.summonerName ?? "",
  //   //       region: "KR",
  //   //     })
  //   //     .then((data) => {
  //   //       setNavigatedSummonerPuuid(data.puuid);
  //   //       setSummonerInfo({
  //   //         summonerName: data.name,
  //   //         profileIconId: data.profileIconId,
  //   //         puuid: data.puuid,
  //   //         level: data.summonerLevel,
  //   //       });
  //   //     });
  //   }

  //   getProfileData();
  // }, [routerParam.summonerName, setNavigatedSummonerPuuid]);

  // .getSummonerByName({
  //   summonerName: "우월한기럭지",
  //   region: "KR",
  // }).then((data)=>data)
  // await SummonerApiFactory().getSummonerByName("우월한기럭지", "KR").puuid
  // SummonerApiFactory()
  //   .getSummonerByName(routerParam.summonerName ?? "", "KR")
  //   .then((data) => {
  //     setNavigatedSummonerPuuid(data.data.puuid);
  //     setSummonerInfo({
  //       summonerName: data.data,
  //       profileIconId: data.data.profileIconId,
  //       puuid: data.data.puuid,
  //       level: data.data.level,
  //       ranks: data.data.ranks,
  //     });
  //   });
  // }, [routerParam.summonerName, setNavigatedSummonerPuuid]);

  if (isLoading) return <>로딩</>;
  if (data?.account.puuid === undefined) return <>알수없는 사용자입니다.</>;
  return (
    <div className="flex flex-col gap-7">
      <Profile
        summonerName={data?.account.gameName}
        profileIconId={data?.summoner.profileIconId}
        puuid={data?.summoner.puuid}
        level={data?.summoner.summonerLevel}
      />
      {data.spectator === undefined ? (
        <></>
      ) : (
        <CurrentGame spectator={data.spectator} />
      )}
      <Matches />
    </div>
  );
}

export default Summoner;
