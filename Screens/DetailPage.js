import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Item } from "../Components/GuideList";
import SelectTagList from "../Components/SelectTagList";
import UnderBar from "../Components/UnderBar";

const DetailPage = ({ route }) => {
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <Item name={name} text={name} />
      <View style={styles.box}>
        <Text>선택된 태그</Text>
      </View>
      <View style={styles.TagListContainer}>
        <SelectTagList />
      </View>
      <View style={styles.temp1}></View>
      <View style={styles.temp}></View>
      <UnderBar />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
    overflow: "scroll",
  },
  box: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    marginBottom: 10,
    //backgroundColor: "pink",
  },
  TagListContainer: {
    width: "80%",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    backgroundColor: "pink",
    //flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10,
  },
  temp: {
    flex: 1,
    backgroundColor: "red",
    width: "80%",
    overflow: "scroll",
  },
  temp1: {
    flex: 0.5,
    backgroundColor: "pink",
    width: "80%",
    overflow: "scroll",
  },
});
