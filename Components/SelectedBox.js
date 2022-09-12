import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SelectTagList from "./SelectTagList";

const SelectedBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>선택된 테마 목록</Text>
      </View>
      <View style={styles.tagbox}>
        <SelectTagList />
      </View>
    </View>
  );
};

export default SelectedBox;

const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    //backgroundColor: "pink",
    alignItems: "center",
  },
  box: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    //backgroundColor: "pink",
    //나중에 포커스 될 때만 색깔 바꾸고
  },
  tagbox: {
    width: "80%",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    //backgroundColor: "pink",
    flex: 1,
    justifyContent: "space-around",
    alignContent: "center",
    padding: 20,
  },
});
