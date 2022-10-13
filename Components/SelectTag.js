import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SelectTag = ({ tag }) => {
  return (
    <View style={styles.clickedContainer}>
      <Text style={styles.text}>{tag}</Text>
    </View>
  );
};

export default SelectTag;

const styles = StyleSheet.create({
  clickedContainer: {
    width: "22%",
    backgroundColor: "#F1694E",
    height: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    justifyContent: "center",
    margin: 3,
    alignSelf: "center",
  },
  text: { textAlign: "center", color: "white" },
});
