import { atom } from "recoil";

export const selectedTag = atom({
  key: "selectedTags", //선택된 태그들
  default: [],
});

export const sendSignUpData = atom({
  key: "sendSignUpDatas",
  default: {},
});

export const AuthToken = atom({
  key: "AuthTokens",
  default: "",
});

export const isHost = atom({
  key: "host",
  default: false,
});

export const matchRequest = atom({
  key: "matchRequest",
  default: {},
});

export const modal = atom({
  key: "modal",
  default: false,
});
