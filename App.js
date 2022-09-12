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
import MainPage from "./Screens/MainPage";
import GuideListPage from "./Screens/GuideListPage";
const App = () => {
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <GuideListPage />
      </View>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
