import React, { useContext } from "react";

function MatchSpell(props: { summoner1Id: number; summoner2Id: number }) {
  return (
    <div className="flex flex-col gap-1">
      <SpellItem spellName={props.summoner1Id} />
      <SpellItem spellName={props.summoner2Id} />
    </div>
  );
}

function SpellItem(props: { spellName: number }) {
  return (
    <img
      className="rounded-lg w-8"
      src={`http://ddragon.leagueoflegends.com/cdn/14.2.1/img/spell/${props.spellName}.png`}
      alt="spell"
      loading="lazy"
    />
  );
}

export default MatchSpell;
