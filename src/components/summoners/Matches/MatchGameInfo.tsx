interface Props {
  mode?: "normal" | "ranked" | "event";
  time?: Date;
  isWin?: boolean;
}

function MatchGameInfo(props: Props) {
  return (
    <div className="flex flex-col text-sm gap-1 text-slate-700">
      <p className="font-bold">일반</p>
      <p className="text-xs">
        {/* {getGameDurationTime(matchContext.match?.gameDuration as number)} */}
      </p>
      {/* <p className="m-2 font-bold">{matchContext}</p> */}
    </div>
  );
}

function getGameDurationTime(time: number) {
  const hours = Math.floor(time / 3600);
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  // return `${hours ? hours + "시간" : ""} ${minutes ? minutes + "분" : ""}${
  //   seconds ? seconds + "초" : ""
  // }`;
}

export default MatchGameInfo;
