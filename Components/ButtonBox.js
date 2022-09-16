import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useResetRecoilState } from "recoil";
import { selectedTag } from "../Atoms/atoms";
import { useNavigation } from "@react-navigation/native";

const ButtonBox = ({ buttonInfoObject }) => {
  const navigation = useNavigation();
  const { leftTitle, rightTitle, leftDest, rightDest } = buttonInfoObject;
  //재사용을 위한 props 설정

  return (
    <View style={styles.container}>
      <View style={styles.Buttonbox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(leftDest);
          }}
        >
          <Text style={styles.text}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(rightDest);
          }} // 일단 테스트
        >
          <Text style={styles.text}>{rightTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    //backgroundColor: "green",
  },
  Buttonbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "40%",
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "white",
    padding: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
