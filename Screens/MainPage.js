import React from "react";
import Title from "../Components/Title";
import { View, StyleSheet, Text } from "react-native";
import SelectedBox from "../Components/SelectedBox";
import UnderBar from "../Components/UnderBar";
import Recommend from "../Components/Recommend";
import ApplyBtn from "../Components/ApplyBtn";

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* <Title style={styles.title} title={"어디까지 가봤니?"} /> 이거 나중에 어떻게 할지 정해야됨*/}
      <SelectedBox />
      <Recommend />
      <ApplyBtn />
      <UnderBar />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
