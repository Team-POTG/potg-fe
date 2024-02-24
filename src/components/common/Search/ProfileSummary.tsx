import { css } from "@emotion/css";
import React, { useState } from "react";
import { AutocompleteDto } from "../../../models/models/AutocompleteDto";
import { Link, useNavigate } from "react-router-dom";
import { responsive } from "../../../styles/screen";

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

  icon: css`
    border-radius: 6px;

    ${responsive({
      width: ["20px", "28px", "40px"],
    })}
  `,

  name: css`
    font-weight: bold;

    ${responsive({
      fontSize: ["10px", "12px", "14px"],
    })}
  `,

  rank: css`
    ${responsive({
      fontSize: ["8px", "10px", "12px"],
    })}
  `,
};

export function ProfileSummary(props: AutocompleteDto) {
  const navigate = useNavigate();

  return (
    <button
      className={styles.self}
      onClick={() => {
        navigate(`/${props.gameName}#${props.tagLine}`);
      }}
    >
      <img
        className={styles.icon}
        src={`http://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/${props.profileIconId}.png`}
        alt="icon"
      />
      <p className={styles.name}>{`${props.gameName}#${props.tagLine}`}</p>
      {props.tier === undefined ? (
        <></>
      ) : (
        <p className={styles.rank}>
          {`${props.tier} - ${props.rank}(${props.leaguePoint}LP)`}
        </p>
      )}
    </button>
  );
}
