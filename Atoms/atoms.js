import { atom } from "recoil";

export const selectedTag = atom({
  key: "selectedTags", //선택된 태그들
  default: [], //이거 자꾸 무의식적으로 객체로 바꾸는데 ㄴㄴ
});

export const sendSignUpData = atom({
  key: "sendSignUpDatas",
  default: {},
});

export const AuthToken = atom({
  //이거 나중에 axios.create해서 헤더 계속 넘겨주는거 ㄱㄱ
  key: "AuthTokens",
  default: "",
});
