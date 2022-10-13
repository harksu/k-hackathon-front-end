import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { matchRequest } from "../Atoms/atoms";

const Modal = () => {
  const match = useRecoilValue(matchRequest);
  const { online, userRequest, period } = match;
  return (
    <View style={styles.modalContainer}>
      <Text>요청 정보는 {online ? "온라인" : "오프라인"}입니다.</Text>
      <Text>요청 정보는 {userRequest}입니다.</Text>
      <Text>요청 정보는 {period}입니다.</Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.8,
    backgroundColor: "pink",
    hegiht: "80%",
  },
});
