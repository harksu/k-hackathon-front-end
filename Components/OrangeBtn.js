import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
//버튼을 따로 분리
const OrangeBtn = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OrangeBtn;
