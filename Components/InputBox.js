import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useState, useRef } from "react";

const InputBox = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState(""); //이거 나중에 서버에 보내면 그 때 다 clear

  const idInputRef = useRef();
  const pwInputRef = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={setName}
          textAlign={"center"}
          autoFocus={true}
          blurOnSubmit={false}
          onSubmitEditing={() => {
            idInputRef.current.focus();
          }}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="사용하실 ID를 입력해주세요"
          value={id}
          onChangeText={setId}
          textAlign={"center"}
          ref={idInputRef}
          blurOnSubmit={false}
          onSubmitEditing={() => pwInputRef.current.focus()}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="사용하실 PW를 입력해주세요"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="gray"
          textAlign={"center"}
          ref={pwInputRef}
          blurOnSubmit={false}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: "center",
    justifyContent: "space-around",
  },
  box: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    flex: 0.25,
    textAlign: "center",
    //나중에 포커스 될 때만 색깔 바꾸고
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
  },
});
