import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Level = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.course}>베이직</Text>
        <Text style={styles.price}>5400원 </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.course}>프리미엄</Text>
        <Text style={styles.price}>5400원 </Text>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.course}>오프라인</Text>
        <Text style={styles.price}>5400원 </Text>
      </View>
    </View>
  );
};

export default Level;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textBox: {
    width: "33%",
    hegiht: "100%",
    flexDirection: "column",
    justifyContent: "center",
    //textAlign: "center",
    alignItems: "center",
    //backgroundColor: "orange",
    padding: 2,
  },
  course: {
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
    fontSize: 10,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
