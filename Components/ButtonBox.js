import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useResetRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedTag, sendSignUpData, matchRequest } from "../Atoms/atoms";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const ButtonBox = ({ buttonInfoObject }) => {
  const navigation = useNavigation();
  const { leftTitle, rightTitle, leftDest, rightDest } = buttonInfoObject;
  const userInfo = useRecoilValue(sendSignUpData);
  const resetInfo = useResetRecoilState(sendSignUpData);
  const resetSelectTag = useResetRecoilState(selectedTag);
  const setMatch = useSetRecoilState(matchRequest);
  const test = useRecoilValue(matchRequest);
  return (
    <View style={styles.container}>
      <View style={styles.Buttonbox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (leftTitle === "회원가입") {
              axios({
                method: "post",
                url: `/api/sign-up`,
                data: {
                  ...userInfo,
                },
              })
                .then((response) => {
                  Alert.alert("회원가입되었습니다.");
                  navigation.navigate(leftDest);
                })
                .catch((err) => Alert.alert(err));
            } else if (leftTitle === "온라인매칭") {
              setMatch({ ...test, isOnline: true });
              navigation.navigate(leftDest);
            }
          }}
        >
          <Text style={styles.text}>{leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (rightTitle === "취소하기") {
              resetInfo();
              resetSelectTag();
              navigation.goBack();
            } else if (rightTitle === "오프라인매칭")
              setMatch({ ...test, isOnline: false });
            navigation.navigate(rightDest);
          }}
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
