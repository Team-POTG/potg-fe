import { atom, selector } from "recoil";
// import { MatchEntity } from "../_models";

// export const matchesDataState = atom<MatchEntity[]>({
//   key: "matchesDataState",
//   default: [],
// });

// export const matchDataSelector = selector<number>({
//   key: "matchDataSelector",
//   get: ({ get }) => get(matchesDataState).at(index), //TODO:index로 불러오기
// });

// TODO: 반복기 활용하여 matches리스트 계속 추가
// export const matchesDataSelector = selector<MatchEntity[]>({
//   key: "matchesDataSelector",
//   get: ({ get }) => {
//     return matchesDataState;
//   },
//   set: ({ set }, match) => {
//     set(matchesDataState, [...matchesDataState,match]);
//   },
// });
