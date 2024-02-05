import { atom } from "recoil";
import { MatchDto } from "../../gql/graphql";

export const matchesState = atom<MatchDto[]>({
  key: "matchesState",
  default: [],
});
