import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TagList from "./TagList";

const TagBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>선호하는 테마 선택</Text>
      </View>
      <View style={styles.tagbox}>
        <TagList />
      </View>
    </View>
  );
};

export default TagBox;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: "center",
  },
  box: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
  },
  tagbox: {
    width: "80%",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    flex: 1,
    justifyContent: "space-around",
    alignContent: "center",
    padding: 20,
  },
});
