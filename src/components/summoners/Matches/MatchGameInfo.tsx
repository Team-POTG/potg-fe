interface Props {
  queueId: number;
  time: number;
  isWin: boolean;
}

function MatchGameInfo(props: Props) {
  return (
    <div className="flex flex-col text-sm gap-1 text-slate-700">
      <p className="font-bold">{getGameModeToString(props.queueId)}</p>
      <p className="text-xs">{getGameDurationToTime(props.time)}</p>
      <p className="m-2 font-bold">{props.isWin ? "승리" : "패배"}</p>
    </div>
  );
}

function getGameDurationToTime(time: number) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.round(time % 60);

  return `${hours ? `${hours}시간` : ""} ${minutes ? `${minutes}분` : ""} ${
    seconds ? `${seconds}초` : ""
  }`;
}

function getGameModeToString(queueId: number) {
  switch (queueId) {
    case 420:
      return "솔로랭크";
    case 440:
      return "자유랭크";
    case 450:
      return "칼바람 나락";
    default:
      return "";
  }
}

export default MatchGameInfo;
