import { StyleSheet, Text, View } from "react-native";
import React from "react";

import SignUp from "./Screens/SignUp";
const App = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
