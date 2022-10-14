import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import React, { useState, useRef } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { sendSignUpData, selectedTag } from "../Atoms/atoms";

const InputBox = () => {
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const pwInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [focusInput, setFocusInput] = useState(nameInputRef);

  const setData = useSetRecoilState(sendSignUpData);
  const selected = useRecoilValue(selectedTag);
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
          onSubmitEditing={() => {
            emailInputRef.current.focus();
            setFocusInput(emailInputRef);
          }}
        />
      </View>
      <View
        style={[styles.box, focusInput === emailInputRef && styles.focusbox]}
      >
        <TextInput
          placeholder="E-mail을 입력해주세요"
          value={email}
          onChangeText={setEmail}
          textAlign={"center"}
          blurOnSubmit={false}
          ref={emailInputRef}
          onTouchStart={() => {
            setFocusInput(emailInputRef);
          }}
          onSubmitEditing={() => {
            phoneInputRef.current.focus();
            setFocusInput(phoneInputRef);
          }}
        />
      </View>
      <View
        style={[styles.box, focusInput === phoneInputRef && styles.focusbox]}
      >
        <TextInput
          placeholder="전화번호를 입력해주세요"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          textAlign={"center"}
          blurOnSubmit={false}
          ref={phoneInputRef}
          onTouchStart={() => {
            setFocusInput(phoneInputRef);
          }}
          onSubmitEditing={() => {
            Keyboard.dismiss();
            setData({
              username: id,
              password: password,
              name: name,
              email: email,
              phone: phoneNumber,
              tags: selected,
            });
          }}
        />
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  box: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    flex: 0.2,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
  },
  focusbox: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    flex: 0.2,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, .5)",
    borderRadius: 20,
  },
});
