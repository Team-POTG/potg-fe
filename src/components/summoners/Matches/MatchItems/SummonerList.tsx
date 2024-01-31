import React, { useEffect } from "react";
import { CHAMPION_IMAGE_CDN } from "../../../../config/host";
import { useRecoilValue } from "recoil";
import { puuidState } from "../../../../recoil/summonerInfo";
import { ParticipantDto, TeamDto } from "../../../../gql/graphql";

function SummonerList(props: { participants: ParticipantDto[] }) {
  return (
    <div className="flex gap-2">
      {props.participants?.map((team) => {
        return <></>;
        // return <TeamItem team={team} />;
      })}
    </div>
  );
}

// function TeamItem(props: { team: ParticipantDto }) {
//   const navigatedSummonerPuuid = useRecoilValue(puuidState);

//   return (
//     <div className="flex flex-col gap-1">
//       {props.team?.map((summoner) => {
//         return (
//           <SummonerItem
//             summonerName={summoner.}
//             championName={summoner.championName}
//             isFocusedSummoner={summoner.puuid === navigatedSummonerPuuid}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function SummonerItem(props: {
//   summonerName: string | null | undefined;
//   championId?: number | null | undefined;
//   championName?: string | null | undefined;
//   isFocusedSummoner?: boolean;
// }) {
//   return (
//     <div className="flex gap-1 items-center">
//       <div className="flex h-[20px] w-[20px] rounded-md overflow-hidden items-center">
//         <img
//           className="h-[22px] w-[22px] object-cover"
//           src={`${CHAMPION_IMAGE_CDN}${props.championName}.png`}
//           alt="champion"
//           loading="lazy"
//         />
//       </div>
//       <p
//         className={`text-xs w-20 text-start overflow-hidden whitespace-nowrap text-ellipsis ${
//           props.isFocusedSummoner ? "font-bold" : ""
//         }`}
//       >
//         {props.summonerName}
//       </p>
//     </div>
//   );
// }

export default SummonerList;
