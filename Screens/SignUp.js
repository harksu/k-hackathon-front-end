import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/Title";
import InputBox from "../Components/InputBox";
import TagBox from "../Components/TagBox";
import SelectedBox from "../Components/SelectedBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";
import { selectedTag } from "../Atoms/atoms";
import { useRecoilValue } from "recoil";
import Container from "toastify-react-native";

const SignUp = () => {
  const selectedTagList = useRecoilValue(selectedTag);
  const buttonInfoObject = {
    leftTitle: "회원가입",
    rightTitle: "취소하기",
    leftDest: "로그인페이지",
    rightDest: "가이드리스트",
  };
  return (
    <View style={styles.container}>
      <Container duration={1000} />
      {/* // <Title title="회원 가입" /> */}
      <InputBox />
      <TagBox />
      <SelectedBox tagList={selectedTagList} />
      <ButtonBox buttonInfoObject={buttonInfoObject} />
      <UnderBar />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
