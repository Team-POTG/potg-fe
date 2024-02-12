import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import MatchChampionIcon from "./MatchChampionIcon";
import MatchScoreBoard from "./MatchScoreBoard";
import MatchSummonerList from "./MatchSummonerList";
import { MatchDto, ParticipantDto } from "../../../gql/graphql";
import { createContext } from "react";
import MatchGameInfo from "./MatchGameInfo";
import MatchSpell from "./MatchSpell";
import MatchItemList from "./MatchItemList";

export const ParticipantsContext = createContext<ParticipantDto[]>([]);

function Match(props: { match: MatchDto; index: number }) {
  const account = useRecoilValue(accountState);
  const navigatedSummonerParticipant = props.match.info.participants.filter(
    (summoenr) => summoenr.puuid === account.puuid
  )[0];

  return (
    <ParticipantsContext.Provider value={props.match.info.participants}>
      <div
        className={`flex flex-col border-2 ${
          navigatedSummonerParticipant.win
            ? "border-blue-400 bg-blue-200"
            : "border-rose-400 bg-rose-200"
        }  gap-1 min-h-[120px] text-center rounded-md py-1 justify-center`}
      >
        <div className="flex flex-grow gap-10 items-center place-self-center">
          <MatchGameInfo
            queueId={props.match.info.queueId}
            time={props.match.info.gameDuration}
            isWin={navigatedSummonerParticipant.win}
          />
          <div className="flex gap-2">
            <MatchChampionIcon
              championName={navigatedSummonerParticipant.championName}
            />
            <MatchSpell
              summoner1Id={navigatedSummonerParticipant.summoner1Id}
              summoner2Id={navigatedSummonerParticipant.summoner2Id}
            />
            <MatchItemList
              items={{
                item0: navigatedSummonerParticipant.item0,
                item1: navigatedSummonerParticipant.item1,
                item2: navigatedSummonerParticipant.item2,
                item3: navigatedSummonerParticipant.item3,
                item4: navigatedSummonerParticipant.item4,
                item5: navigatedSummonerParticipant.item5,
                item6: navigatedSummonerParticipant.item6,
              }}
            />
          </div>
          <MatchScoreBoard
            participant={navigatedSummonerParticipant}
            teamTotalKills={
              props.match.info.teams.find(
                (teamId) =>
                  teamId.teamId === navigatedSummonerParticipant.teamId
              )?.objectives.champion.kills
            }
            gameDuration={props.match.info.gameDuration}
          />
          <MatchSummonerList />
        </div>
      </div>
    </ParticipantsContext.Provider>
  );
}

export default Match;
