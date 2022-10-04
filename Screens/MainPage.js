import React, { useEffect } from "react";
import Title from "../Components/Title";
import { View, StyleSheet, Text } from "react-native";
import SelectedBox from "../Components/SelectedBox";
import UnderBar from "../Components/UnderBar";
import Recommend from "../Components/Recommend";
import ApplyBtn from "../Components/ApplyBtn";

const MainPage = () => {
  return (
    <View style={styles.container}>
      <SelectedBox />
      <Recommend />
      <View style={styles.btnContainer}>
        <ApplyBtn name="관광객 등록" destnation="매칭페이지" />
        <ApplyBtn name="가이드 등록" destnation="가이드매칭페이지" />
      </View>
      <UnderBar />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  btnContainer: {
    flex: 0.6,
    flexDirection: "row",
    width: "90%",
    // backgroundColor: "pink",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
