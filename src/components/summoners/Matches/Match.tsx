import React from "react";

function Match() {
  // const [match, setMatch] = useState<MatchDto>();
  // const dispatch = useAppDispatch();
  // const name = useAppSelector((state) => state.name.value);
  // const user = match?.info?.participants?.find((user) => user.puuid === name);

  // const isWin = user?.win;

  // useEffect(() => {
  //   async function fetchData() {
  //     if (props.matchId === undefined) return;
  //     const _match = (await MatchApiFactory().getMatch(props.matchId, "asia"))
  //       .data;
  //     setMatch(_match);
  //   }

  //   fetchData();
  // }, [props]);

  return (
    <div
      className={`${
        // isWin
        // ? "bg-blue-200 border-2 border-blue-400"
        "bg-red-200 border-2 border-red-400"
      } flex flex-grow gap-10 min-h-[120px] text-center items-center rounded-md py-1`}
    >
      {/* 게임 정보 */}
      <div className="ml-5 flex flex-col gap-3 text-gray-700">
        <div className="flex flex-col gap-1">
          <div className="font-bold text-sm">
            {/* {MatchTypeList[match?.info?.queueId as number]} */}
          </div>
          <div className="text-xs">26분 13초</div>
        </div>
        <div>
          {/* <div className="font-bold text-sm">{isWin ? "승리" : "패배"}</div> */}
        </div>
      </div>
      {/* 게임 사용자 정보 */}
      <div className="flex gap-3 items-center">
        <div className="flex gap-2">
          {/* <Champion
            size={SizeType.large}
            src={`http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${user?.championName}.png`}
          /> */}
          {/* <div className="flex w-[70px] h-[70px] rounded-2xl overflow-hidden items-center">
            <img
              className="w-[80px] h-[80px] object-cover"
              src=
              alt=""
            />
          </div> */}
          {/* <UserSpellList user={user} /> */}
        </div>
        <div className="grid grid-cols-4 gap-1">
          {/* <UserItemList user={user} /> */}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* <Score user={user} match={match} /> */}
        <div className="flex gap-1 justify-center">
          {/* <AchieveBadge title="펜타킬" />
          <AchieveBadge title="드래곤 슬레이어" />
          <AchieveBadge title="캐리" /> */}
        </div>
      </div>

      <div className="flex gap-5">
        {/* <PlayerList match={match} name={name} puuid={user?.puuid} /> */}
      </div>
      <div className="bg-red-500 flex-grow">dd</div>
    </div>
  );
}

export default Match;
