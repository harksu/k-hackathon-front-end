import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UnderBar from "../Components/UnderBar";

const OnlineGuidePage = () => {
  return (
    <View style={styles.container}>
      <Text>OnlineGuidePage</Text>
      <UnderBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OnlineGuidePage;
