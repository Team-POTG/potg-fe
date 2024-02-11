import { atom } from "recoil";

export const accountState = atom({
  key: "accountState",
  default: { puuid: "", summonerId: "" },
});

export const regionState = atom({
  key: "regionState",
  default: "",
});
