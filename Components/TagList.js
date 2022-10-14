import { StyleSheet, View } from "react-native";
import React from "react";
import Tag from "./Tag";
import { TAGDATA } from "./../Data/tagData";

const TagList = () => {
  const TagData = TAGDATA;
  return (
    <View style={styles.container}>
      {TagData?.map((tag) => (
        <Tag name={tag.value} key={tag.value} />
      ))}
    </View>
  );
};

export default TagList;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    flexWrap: "wrap",
  },
  text: { textAlign: "center" },
});
