import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MatchLocationBox = ({ locationInput }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{locationInput} </Text>
      </View>
    </View>
  );
};

export default MatchLocationBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    width: "80%",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "gray",
  },
});
