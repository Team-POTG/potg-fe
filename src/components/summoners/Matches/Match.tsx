import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import MatchScoreBoard from "./MatchScoreBoard";
import MatchSummonerList from "./MatchSummonerList";
import { MatchDto, ParticipantDto } from "../../../gql/graphql";
import { createContext, useState } from "react";
import MatchGameInfo from "./MatchGameInfo";
import MatchDetailButton from "./MatchDetailButton";
import { css } from "@emotion/css";
import MatchDetail from "./MatchDetail";
import GameItemInventory from "./GameItemInventory";
import PlayedChampionInfo from "../PlayedChampionInfo";

export const ParticipantsContext = createContext<ParticipantDto[]>([]);

const styles = {
  matchDetail: {
    self: css`
      /* background-color: rgb(244, 244, 244); */
      display: flex;
      flex-direction: column;
      margin: 2px 4px 2px 4px;
    `,
  },
};

function Match(props: { match: MatchDto; index: number }) {
  const [detailToggle, setDetailToggle] = useState(false);
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
            <PlayedChampionInfo
              championId={navigatedSummonerParticipant.championId}
              championName={navigatedSummonerParticipant.championName}
              championIcon={{ size: 68 }}
              playStyleIcon={{ size: 28, gap: 5, borderRadius: 5 }}
            />
            <GameItemInventory
              inventory={{
                item0: navigatedSummonerParticipant.item0,
                item1: navigatedSummonerParticipant.item1,
                item2: navigatedSummonerParticipant.item2,
                item3: navigatedSummonerParticipant.item3,
                item4: navigatedSummonerParticipant.item4,
                item5: navigatedSummonerParticipant.item5,
                item6: navigatedSummonerParticipant.item6,
              }}
              alignType={"inGameInventoryStyle"}
            />
          </div>
          <MatchScoreBoard
            participant={navigatedSummonerParticipant}
            teamTotalKills={
              props.match.info.teams.find(
                (teamId) =>
                  teamId.teamId === navigatedSummonerParticipant.teamId
              )!.objectives.champion.kills
            }
            gameDuration={props.match.info.gameDuration}
          />
          <MatchSummonerList />
        </div>
        <div className={styles.matchDetail.self}>
          <MatchDetailButton
            isWin={navigatedSummonerParticipant.win}
            onClick={() => setDetailToggle(!detailToggle)}
          />
          {detailToggle ? <MatchDetail {...props.match} /> : <></>}
        </div>
      </div>
    </ParticipantsContext.Provider>
  );
}

export default Match;
