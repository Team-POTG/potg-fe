import { useRef, useState } from "react";
import { responsive } from "../../../styles/screen";
import { css } from "@emotion/css";
import Search_Button from "../../../images/search_button.png";
import { fontSize } from "../../../styles/font";
import { useNavigate } from "react-router";

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
  const riotId = useRef("");
  const navigate = useNavigate();

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
            riotId.current = value.target.value;
          }}
          onKeyDown={(key) => {
            if (key.key === "Enter") navigate(`/${riotId.current}`);
          }}
        />

        <button className={styles.search.button}>
          <img src={Search_Button} alt="search" />
        </button>
      </div>
      {isFocused ? <></> : <></>}
    </div>
  );
}

export default Search;
