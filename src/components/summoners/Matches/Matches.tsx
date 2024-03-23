import GameTypeCategory from "./GameTypeCategory";
import { MatchDto } from "../../../gql/graphql";
import Match from "./Match";

interface Props {
  matches: MatchDto[] | undefined;
}

function Matches(props: Props) {
  // const fetch = useFetch();

  return (
    <div className="flex flex-col gap-5 text-slate-600">
      <div className="flex gap-1 ml-5 font-bold">
        <p>최근</p>
        <p className="text-orange-500">20게임</p>
        <p>전적</p>
      </div>
      {/* <GameTypeCategory /> */}
      {/* <Analytic /> */}
      <div className="flex flex-col gap-2">
        {props.matches
          ?.slice()
          .sort(
            (prevMatch, currentMatch) =>
              currentMatch.info.gameCreation - prevMatch.info.gameCreation
          )
          .map((match, index) => (
            <Match match={match} index={index} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Matches;
