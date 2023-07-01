import { useCookies } from "react-cookie";

type summoner = {
  name: string;
  level: number;
  rank: number;
  tier: number;
  icon: number;
};

export default function useSummonerHistory(): [
  any,
  (summonerName: summoner) => void
] {
  const [cookie, setCookie, removeCookie] = useCookies(["summonerHistory"]);
  console.log(cookie.summonerHistory);

  return [
    cookie,
    () => {
      setCookie("summonerHistory", "a");
    },
  ];
}
