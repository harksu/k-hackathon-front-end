import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import SelectTag from "./SelectTag";
import { selectedTag, sendSignUpData } from "../Atoms/atoms";
import { isHost } from "../Atoms/atoms";

const SelectTagList = () => {
  const justLogin = useRecoilValue(isHost); //가입안하고 바로 로그인 했을 때, 서버에서 해당 태그 리스트 받아오기위한 조건 밸류
  const selected = useRecoilValue(selectedTag);
  const data = useRecoilValue(sendSignUpData);
  const setData = useSetRecoilState(sendSignUpData);
  useEffect(() => {
    setData({
      ...data,
      tags: selected,
    });
  }, [selected]);
  return (
    <View style={styles.container}>
      {/* {justLogin //서버 res랑 req랑 다름
        ? selected?.map((tag, index) => (
            <SelectTag tag={tag.name || tag.tag} key={index} />
          ))
        : selected?.map((tag, index) => (
            <SelectTag tag={tag.tag} key={index} />
          ))} */}
      {selected?.map((tag, index) => (
        <SelectTag tag={tag.name || tag.tag} key={index} /> //이거 바꿔달라고 해야될듯
      ))}
    </View>
  );
};

export default SelectTagList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  text: { textAlign: "center" },
});
