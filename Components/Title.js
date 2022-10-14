import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ title, position }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {title}
        {position}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 0.2,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: { fontSize: 10, fontWeight: "bold" },
});
