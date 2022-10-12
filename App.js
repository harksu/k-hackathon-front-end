import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import SignUp from "./Screens/SignUp";
import MainPage from "./Screens/MainPage";
import GuideListPage from "./Screens/GuideListPage";
import DetailPage from "./Screens/DetailPage";
import MatchScreen from "./Screens/MatchScreen";
import GuideSignUpScreen from "./Screens/GuideSignUpScreen";
import AlertPage from "./Screens/AlertPage";
import axios from "axios";

const Stack = createNativeStackNavigator();

const App = () => {
  axios.defaults.baseURL = "http://mju-hackathon.p-e.kr:8080/";
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="로그인페이지">
          <Stack.Screen name="로그인페이지" component={LoginScreen} />
          <Stack.Screen name="회원가입" component={SignUp} />
          <Stack.Screen name="알림함페이지" component={AlertPage} />
          <Stack.Screen name="매칭페이지" component={MatchScreen} />
          <Stack.Screen name="가이드매칭페이지" component={GuideSignUpScreen} />
          <Stack.Screen name="메인페이지" component={MainPage} />
          <Stack.Screen name="가이드리스트" component={GuideListPage} />
          <Stack.Screen name="디테일페이지" component={DetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
