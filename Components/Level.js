import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Level = ({ onlinePrice, offlinePrice, isOnlyOnline }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.course}>온라인</Text>
        <Text style={styles.price}>{onlinePrice}원 </Text>
      </View>
      {!isOnlyOnline && (
        <View style={styles.textBox}>
          <Text style={styles.course}>오프라인</Text>
          <Text style={styles.price}>{offlinePrice}원 </Text>
        </View>
      )}
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
