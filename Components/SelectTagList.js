import { StyleSheet, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import React from "react";
import SelectTag from "./SelectTag";
import { selectedTag } from "../Atoms/atoms";

const SelectTagList = () => {
  const selected = useRecoilValue(selectedTag);
  return (
    <View style={styles.container}>
      {selected?.map((tag, index) => (
        <SelectTag name={tag.name} key={index} namecode={tag.namecode} />
      ))}
    </View>
  );
};

export default SelectTagList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  text: { textAlign: "center" },
});
