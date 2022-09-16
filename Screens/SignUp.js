import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/Title";
import InputBox from "../Components/InputBox";
import TagBox from "../Components/TagBox";
import SelectedBox from "../Components/SelectedBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";

const SignUp = () => {
  const buttonInfoObject = {
    leftTitle: "회원가입",
    rightTitle: "취소하기",
    leftDest: "메인페이지",
    rightDest: "가이드리스트",
  };
  return (
    <View style={styles.container}>
      {/* // <Title title="회원 가입" /> */}
      <InputBox />
      <TagBox />
      <SelectedBox />
      <ButtonBox buttonInfoObject={buttonInfoObject} />
      <UnderBar />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
