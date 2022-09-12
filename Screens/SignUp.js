import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/Title";
import InputBox from "../Components/InputBox";
import TagBox from "../Components/TagBox";
import SelectedBox from "../Components/SelectedBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* // <Title title="회원 가입" /> */}
      <InputBox />
      <TagBox />
      <SelectedBox />
      <ButtonBox />
      <UnderBar />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
