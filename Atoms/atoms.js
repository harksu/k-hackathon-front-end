import { atom } from "recoil";

export const selectedTag = atom({
  key: "selectedTag", //선택된 태그들
  default: [], //이거 자꾸 무의식적으로 객체로 바꾸는데 ㄴㄴ
});

export const sendSignUpData = atom({
  key: "sendSignUpData", //선택된 태그들
  default: {}, //이거 자꾸 무의식적으로 객체로 바꾸는데 ㄴㄴ
});
