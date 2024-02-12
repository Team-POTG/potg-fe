import { css } from "@emotion/css";
import React from "react";
import { RequestApi } from "../../../models";
import { useRecoilValue } from "recoil";
import { accountState } from "../../../recoil/navigate/atom";
import useFetch from "../../../hooks/useFetch";

const styles = {
  self: css`
    background-color: rgb(34 197 94);
    border-radius: 5px;
    padding: 4px;
    color: white;
    font-size: 0.75em;
    width: 56px;
  `,
};

function Refetch() {
  const account = useRecoilValue(accountState);
  const fetch = useFetch();

  return (
    <button
      className={styles.self}
      onClick={async () => {
        await new RequestApi().requestByTagLineWithGameName({
          tagLine: account.tagLine,
          gameName: account.gameName,
          region: "KR",
        });

        fetch?.riot.refetch();
        fetch?.matches.refetch();
      }}
    >
      전적 갱신
    </button>
  );
}

export default Refetch;
