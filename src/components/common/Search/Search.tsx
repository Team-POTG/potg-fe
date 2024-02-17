import { useMemo, useRef, useState } from "react";
import { responsive } from "../../../styles/screen";
import { css } from "@emotion/css";
import Search_Button from "../../../images/search_button.png";
import { fontSize } from "../../../styles/font";
import { useNavigate } from "react-router";
import { AutocompleteApi } from "../../../models";
import { RiotId } from "../../../tools/riotId";
import { debounce } from "lodash";
import { SummonerDto } from "../../../models/models/SummonerDto";
import { ProfileSummary } from "./ProfileSummary";

const styles = {
  self: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
    background-color: white;
    max-width: 1024px;

    ${responsive(
      { width: ["80%", "80%", "85%"] },
      { borderRadius: ["20px", "35px", "35px"] }
    )}
  `,

  search: {
    div: css`
      display: flex;
      place-items: center;
      gap: 4px;
      width: 100%;
    `,

    input: css`
      width: 100%;
      outline: none;

      ${responsive({
        padding: ["12px", "16px", "20px"],
        paddingLeft: ["20px", "20px", "28px"],
        paddingRight: ["20px", "20px", "28px"],
        fontSize: [fontSize.xs, fontSize.base, fontSize.lg],
      })}
    `,

    button: css`
      cursor: pointer;
      margin-right: 20px;
      margin-top: 8px;

      ${responsive({
        display: ["none", "none", "flex"],
      })}
    `,
  },

  summary: {},
};

function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [riotId, setRiotid] = useState("");
  const navigate = useNavigate();
  const [summaryList, setSummaryList] = useState<SummonerDto[]>([]);

  const debounceSearch = useMemo(
    () =>
      debounce((riotId) => {
        const inputRiotId = new RiotId(riotId).separate();

        new AutocompleteApi()
          .getAutocompleteByRiotId({
            tagLine: inputRiotId.tagLine,
            gameName: inputRiotId.gameName,
            limit: 5,
          })
          .then((summoner) => setSummaryList(summoner));
      }, 100),
    []
  );

  return (
    <div
      className={css`
        box-shadow: ${isFocused ? "1px 1px 30px #ff88004d" : ""};
        ${styles.self}
      `}
    >
      <div
        className={styles.search.div}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      >
        {/* <Translate /> */}
        <input
          className={styles.search.input}
          autoFocus
          type="text"
          placeholder="소환사 명(소환사명#tag)을 입력해주세요"
          onChange={(value) => {
            debounceSearch(value.target.value);
            setRiotid(value.target.value);
          }}
          onKeyDown={(key) => {
            if (key.key === "Enter") navigate(`/${riotId}`);
          }}
        />

        <button className={styles.search.button}>
          <img src={Search_Button} alt="search" />
        </button>
      </div>
      {riotId ? (
        <div className="flex flex-col gap-1 sm:pb-2 md:px-4 md:pb-6 pb-2">
          {summaryList.map((summoner) => (
            <ProfileSummary
              summonerIcon={summoner.profileIconId}
              summonerName={summoner.name}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
