import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useState, useRef } from "react";

const InputBox = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const pwInputRef = useRef();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState(""); //이거 나중에 서버에 보내면 그 때 다 clear
  const [focusInput, setFocusInput] = useState(nameInputRef);

  return (
    <View style={styles.container}>
      <View
        style={[styles.box, focusInput === nameInputRef && styles.focusbox]}
      >
        <TextInput
          placeholder="이름을 입력해주세요"
          value={name}
          onChangeText={setName}
          textAlign={"center"}
          autoFocus={true}
          blurOnSubmit={false}
          ref={nameInputRef}
          onTouchStart={() => {
            setFocusInput(nameInputRef);
          }}
          onSubmitEditing={() => {
            idInputRef.current.focus();
            setFocusInput(idInputRef);
          }}
        />
      </View>
      <View style={[styles.box, focusInput === idInputRef && styles.focusbox]}>
        <TextInput
          placeholder="사용하실 ID를 입력해주세요"
          value={id}
          onChangeText={setId}
          textAlign={"center"}
          ref={idInputRef}
          blurOnSubmit={false}
          onTouchStart={() => {
            setFocusInput(idInputRef);
          }}
          onSubmitEditing={() => {
            pwInputRef.current.focus();
            setFocusInput(pwInputRef);
          }}
        />
      </View>
      <View style={[styles.box, focusInput === pwInputRef && styles.focusbox]}>
        <TextInput
          placeholder="사용하실 PW를 입력해주세요"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholderTextColor="gray"
          textAlign={"center"}
          ref={pwInputRef}
          blurOnSubmit={false}
          onTouchStart={() => {
            setFocusInput(pwInputRef);
          }}
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
    alignItems: "center",
    justifyContent: "space-around",
  },
  box: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    flex: 0.25,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
  },
  focusbox: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    flex: 0.25,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
  },
});
