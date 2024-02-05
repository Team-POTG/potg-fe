import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Profile from "../../components/summoners/Profile/Profile";
import Matches from "../../components/summoners/Matches/Matches";
import CurrentGame from "../../components/summoners/CurrentGame/CurrentGame";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AccountApi } from "../../models/apis/AccountApi";
import { LeagueApi, SummonerApi } from "../../models";
import { RiotId } from "../../tools/riotId";
import { useRecoilState } from "recoil";
import { accountState } from "../../recoil/navigate/atom";

function Summoner() {
  const location = useLocation();
  const [account, setAccount] = useRecoilState(accountState);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["accountData"],
    queryFn: async () => {
      const account = await new AccountApi().getAccountByGameNameWithTagLine({
        tagLine: location.hash.replace("#", ""),
        gameName: decodeURI(location.pathname.replace("/", "")),
        region: "KR",
      });

      const summoner = await new SummonerApi().getSummonerByPuuid({
        puuid: account.puuid,
        region: "KR",
      });

      // const league = await new LeagueApi().getLeague({
      //   id: summoner.id,
      //   region: "KR",
      // });

      return { account: account, summoner: summoner };
    },
  });

  useEffect(() => {
    refetch();

    if (isLoading) return;
    if (data === undefined) return;
    setAccount({ puuid: data?.account.puuid });
  }, [data, isLoading, location, refetch, setAccount]);

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

  if (isLoading) return <></>;
  if (data?.account.puuid === undefined) return <></>;

  return (
    <div className="flex flex-col gap-7">
      <Profile
        summonerName={data?.summoner.name}
        profileIconId={data?.summoner.profileIconId}
        puuid={data?.summoner.puuid}
        level={data?.summoner.summonerLevel}
      />
      <CurrentGame />
      <Matches />
    </div>
  );
}

export default Summoner;
