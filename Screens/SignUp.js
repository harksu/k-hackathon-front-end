import { StyleSheet, View } from "react-native";
import React from "react";
import InputBox from "../Components/InputBox";
import TagBox from "../Components/TagBox";
import SelectedBox from "../Components/SelectedBox";
import ButtonBox from "../Components/ButtonBox";
import { selectedTag } from "../Atoms/atoms";
import { useRecoilValue } from "recoil";

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
      <InputBox />
      <TagBox />
      <SelectedBox tagList={selectedTagList} />
      <ButtonBox buttonInfoObject={buttonInfoObject} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
