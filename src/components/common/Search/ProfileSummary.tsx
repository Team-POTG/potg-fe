import { css } from "@emotion/css";
import React, { useState } from "react";
import { AutocompleteDto } from "../../../models/models/AutocompleteDto";
import { Link, useNavigate } from "react-router-dom";

const styles = {
  self: css`
    display: flex;
    place-items: center;
    gap: 8px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 8px;

    :hover {
      background-color: #eeeeee;
    }
  `,
};

export function ProfileSummary(props: { autocomplete: AutocompleteDto }) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.self}
      onClick={() => {
        navigate(
          `/${props.autocomplete.gameName}#${props.autocomplete.tagLine}`
        );
      }}
    >
      <img
        className="sm:w-5 md:w-7 lg:w-10 w-5 rounded-md"
        src={`http://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/${props.autocomplete.profileIconId}.png`}
        alt="icon"
      />
      <p className="sm:text-[10px] md:text-xs lg:text-sm text-[10px] font-bold">
        {`${props.autocomplete.gameName}#${props.autocomplete.tagLine}`}
      </p>
      <p className="sm:text-[8px] md:text-[10px] lg:text-[12px] text-[8px]">
        {`${props.autocomplete.tier} - ${props.autocomplete.rank}(${props.autocomplete.leaguePoint}LP)`}
      </p>
    </button>
  );
}
