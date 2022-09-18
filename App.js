import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Screens/SignUp";
import MainPage from "./Screens/MainPage";
import GuideListPage from "./Screens/GuideListPage";
import DetailPage from "./Screens/DetailPage";
import MatchScreen from "./Screens/MatchScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUpScreen">
          <Stack.Screen name="매칭페이지" component={MatchScreen} />
          <Stack.Screen name="회원가입" component={SignUp} />
          <Stack.Screen name="메인페이지" component={MainPage} />

          <Stack.Screen name="가이드리스트" component={GuideListPage} />
          <Stack.Screen name="디테일페이지" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
