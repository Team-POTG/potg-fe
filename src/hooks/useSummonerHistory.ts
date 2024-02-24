import { AutocompleteDto } from "../models/models/AutocompleteDto";

export default function useSummonerHistory(): {
  history: AutocompleteDto[];
  addSummonerHistory: (summonerData: AutocompleteDto) => void;
} {
  return {
    history: JSON.parse(localStorage.getItem("history") ?? "[]"),
    addSummonerHistory: (summonerData) => {
      const history = localStorage.getItem("history") ?? "[]";
      const historyList: AutocompleteDto[] = JSON.parse(history);
      const foundSummonerIndex = historyList.findIndex(
        (value) => value.puuid === summonerData.puuid
      );

      if (foundSummonerIndex === -1) {
        if (historyList.length < 5) {
          historyList.unshift(summonerData);
        } else {
          historyList.pop();
          historyList.unshift(summonerData);
        }
      } else if (foundSummonerIndex > -1) {
        historyList.splice(foundSummonerIndex, 1);
        historyList.unshift(summonerData);
      }

      localStorage.setItem("history", JSON.stringify(historyList));
    },
  };
}
