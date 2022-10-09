import { StyleSheet, View } from "react-native";
import React from "react";
import SelectTag from "./SelectTag";

const SelectTagList = ({ tagList }) => {
  return (
    <View style={styles.container}>
      {/* {justLogin //서버 res랑 req랑 다름
        ? selected?.map((tag, index) => (
            <SelectTag tag={tag.name || tag.tag} key={index} />
          ))
        : selected?.map((tag, index) => (
            <SelectTag tag={tag.tag} key={index} />
          ))} */}
      {tagList?.map((tag, index) => (
        <SelectTag tag={tag.name} key={index} /> //이거 바꿔달라고 해야될듯
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
