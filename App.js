import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import SignUp from "./Screens/SignUp";
const App = () => {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <SignUp />
      </View>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
