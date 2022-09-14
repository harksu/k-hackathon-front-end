import React from "react";
import { View, StyleSheet, Text } from "react-native";
import GuideList from "../Components/GuideList";
import Title from "../Components/Title";
import UnderBar from "../Components/UnderBar";

const GuideListPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title title={"가이드 리스트"} />
      </View>

      <View style={styles.guideListContainer}>
        <GuideList />
      </View>
      <View style={styles.selectedLocation}>
        <Text>설정 지역 : 제주도(온라인)</Text>
      </View>
      <UnderBar />
    </View>
  );
};

export default GuideListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  guideListContainer: {
    flex: 5.5,
  },
  selectedLocation: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
