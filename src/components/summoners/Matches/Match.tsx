import GameInfo from "./MatchItems/GameInfo";
import ScoreBoard from "./MatchItems/ScoreBoard";
import Spell from "./MatchItems/Spell";
import ItemList from "./MatchItems/ItemList";
import SummonerList from "./MatchItems/SummonerList";
import Detail from "./MatchItems/Detail";
import ChampionIcon from "./MatchItems/ChampionIcon";
import { MatchDto } from "../../../gql/graphql";
// import { MatchEntity } from "../../../_models";
// import { NavigatedSummoner } from "../../../types/context/navigatedSummoner";

// export const MatchContext = createContext<NavigatedSummoner>({
//   index: undefined,
//   match: undefined,
//   participant: undefined,
// });

function Match(props: {
  match: MatchDto;
  puuid: string | undefined;
  index: number;
}) {
  const navigatedSummonerParticipant = props.match.info.participants.filter(
    (summoner) => summoner.puuid === props.puuid
  )[0];

  console.log(navigatedSummonerParticipant);

  return (
    <div
      className={`flex flex-col border-2 ${
        true ? "border-blue-400 bg-blue-200" : "border-rose-400 bg-rose-200"
      }  gap-1 min-h-[120px] text-center rounded-md py-1 justify-center`}
    >
      <div className="flex flex-grow gap-10 items-center place-self-center">
        <GameInfo mode="normal" />
        <div className="flex gap-2">
          <ChampionIcon
            championName={navigatedSummonerParticipant.championName}
          />
          <Spell
            summoner1Id={navigatedSummonerParticipant.summoner1Id}
            summoner2Id={navigatedSummonerParticipant.summoner2Id}
          />
          <ItemList
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
        <ScoreBoard participant={navigatedSummonerParticipant} />
        <SummonerList participants={props.match.info.participants} />
      </div>

      {/* <Detail isWin={navigatedSummonerIsWin} /> */}
    </div>
    // </MatchContext.Provider>
  );
}

export default Match;
