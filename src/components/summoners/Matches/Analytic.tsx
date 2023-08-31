import React from "react";
// import { nameState } from "../../../../../../reducers/profile";
// import { useAppSelector } from "../../../../../../store/hook";

function Analytic() {
  // const match = useAppSelector((state) => state.match.value);

  return (
    <table className="text-center">
      <tr className="font-bold">
        <td>승률</td>
        <td>평점</td>
        <td>최고 평점</td>
        <td colSpan={2}>포지션 픽률</td>
        <td colSpan={3}>최근 플레이 한 챔피언</td>
      </tr>
      <tr>
        {/* <td>{match.matches}%</td> */}
        <td>2.78</td>
        <td>6.5</td>
        <td>50%</td>
        <td>40%</td>
        <td>1승 1패</td>
        <td>0승 2패</td>
        <td>1승 0패</td>
      </tr>
    </table>
  );
}

export default Analytic;
