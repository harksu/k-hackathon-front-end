import { StyleSheet, View } from "react-native";
import React from "react";
import SelectTag from "./SelectTag";

const SelectTagList = ({ tagList }) => {
  return (
    <View style={styles.container}>
      {tagList?.map((tag, index) => (
        <SelectTag tag={tag.name} key={index} />
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
