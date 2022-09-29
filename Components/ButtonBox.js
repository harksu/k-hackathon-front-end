import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { selectedTag, sendSignUpData } from "../Atoms/atoms";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ButtonBox = ({ buttonInfoObject }) => {
  const navigation = useNavigation();
  const { leftTitle, rightTitle, leftDest, rightDest } = buttonInfoObject;
  //재사용을 위한 props 설정
  console.log(leftTitle);
  const userInfo = useRecoilValue(sendSignUpData);
  const tempdata = {
    username: "user",
    password: "user123!",
    name: "홍길동",
    email: "test@test.com2",
    phone: "010-1234-1252",
    tags: [
      {
        tag: "hi",
      },
      {
        tag: "hi",
      },
      {
        tag: "hi",
      },
      {
        tag: "hi",
      },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.Buttonbox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(leftDest);
            if (leftTitle === "회원가입") {
              console.log(userInfo);
              axios({
                method: "POST",
                url: `http://3.36.109.37:8080/api/sign-up 
                `,
                //지금 이거 CORS 테스트중이고, 현재 데이터 보내려면 무조건 ENTER로 넘겨야됨
                data: {
                  // ...userInfo,
                  tempdata, //이거 나중에 삭제하장
                },
              }).then((response) => {
                console.log(response);
              });
            }
          }}
        >
          <Text style={styles.text}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(rightDest);
          }} // 일단 테스트
        >
          <Text style={styles.text}>{rightTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    //backgroundColor: "green",
  },
  Buttonbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "40%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "white",
    padding: 5,
  },
  text: {
    fontWeight: "bold",
  },
});
