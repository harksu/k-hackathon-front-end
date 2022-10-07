import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import SelectTag from "./SelectTag";
import { selectedTag, sendSignUpData } from "../Atoms/atoms";

const SelectTagList = () => {
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
      {selected?.map((tag, index) => (
        <SelectTag tag={tag.tag} key={index} />
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
