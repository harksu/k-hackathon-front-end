import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./Screens/SignUp";
import MainPage from "./Screens/MainPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUpScreen"
          // screenOptions={{ headerShown: true }} //이건 나중에 애들한테 물어보고
        >
          <Stack.Screen name="회원가입" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
