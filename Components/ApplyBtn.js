import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
//이거 나중에 매칭 신청하러 가기랑 가이드 등록하러 가기로 바꿔야됨(프랍스로 이름이랑, 네비게이션 좌표 받아야됨)
const ApplyBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("매칭페이지");
          }}
        >
          <Text style={styles.btnTxt}>매칭 신청하러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyBtn;

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: "center",

    justifyContent: "center",
  },
  btnBox: {
    width: "80%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgba(241, 105, 78, 1)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  btnTxt: {
    color: "white",
  },
});
