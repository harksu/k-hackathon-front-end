import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AuthToken } from "../Atoms/atoms";

const LoginScreen = () => {
  const [id, setID] = useState("");
  const [pw, setPw] = useState("");

  const pwInput = useRef();

  const setToken = useSetRecoilState(AuthToken);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>어디까지 가봤니?</Text>
      <View style={styles.box}>
        <TextInput
          placeholder="이름을 입력해주세요"
          value={id}
          onChangeText={setID}
          textAlign={"center"}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            pwInput.current.focus();
          }}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="이름을 입력해주세요"
          value={pw}
          onChangeText={setPw}
          textAlign={"center"}
          blurOnSubmit={false}
          ref={pwInput}
          secureTextEntry={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBox}
        onPress={() => {
          console.log("로그인 눌렸습니다");
          axios
            .post("http://mju-hackathon.p-e.kr:8080/api/sign-in", {
              username: id,
              password: pw,
            })
            .then((response) => {
              console.log(response.data.result.data.accessToken);
              setToken(response.data.result.data.accessToken);
            })
            .catch((error) => console.log(error));
        }}
      >
        <Text style={styles.logintext}>로그인</Text>
      </TouchableOpacity>
      <View style={styles.textbox}>
        <Text style={{ textAlign: "left", opacity: 0.5 }}>
          만약 아직 회원이 아니시라면?{"  "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("회원가입 하러가기 눌렸습니다");
            navigation.navigate("회원가입");
          }}
        >
          <Text style={{ fontWeight: "bold", color: "orange" }}>
            회원가입 하러가기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    marginBottom: 20,
  },
  box: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    flex: 0.07,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
    padding: 3,
  },
  textbox: {
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  loginBox: {
    backgroundColor: "orange",
    width: "80%",
    flex: 0.07,
    marginTop: 5,
    justifyContent: "center",
    borderRadius: 20,
    padding: 3,
  },
  logintext: { fontWeight: "bold", textAlign: "center", color: "white" },
});
