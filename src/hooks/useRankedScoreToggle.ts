import { useState } from "react";

export default function useRankedScoreToggle(): [
  toggle: boolean,
  action: () => void
] {
  const [toggle, setToggle] = useState(false);
  // console.log(cookie.summonerHistory);

  return [toggle, () => setToggle(!toggle)];
}
