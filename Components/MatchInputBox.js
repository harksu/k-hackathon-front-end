import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";

const MatchInputBox = ({ locationInput }) => {
  const locationInputRef = useRef();
  const periodInputRef = useRef();

  const [period, setPeriod] = useState("");
  const [focusInput, setFocusInput] = useState(locationInputRef); // 사실 이거 필요없음

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{locationInput} </Text>
        {/* <TextInput
            placeholder={locationInput}
            value={location}
            onChangeText={setLocation}
            textAlign={"center"}
            blurOnSubmit={false}
            ref={locationInputRef}
            onSubmitEditing={() => {
              periodInputRef.current.focus();
              setFocusInput(periodInputRef);
            }}
          /> */}
      </View>

      <View style={styles.box}>
        <TextInput
          placeholder="기간을 입력해주세요"
          value={period}
          onChangeText={setPeriod}
          textAlign={"center"}
          ref={periodInputRef}
          blurOnSubmit={false}
          onTouchStart={() => {
            setFocusInput(periodInputRef);
          }}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    </View>
  );
};

export default MatchInputBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: "center",
    // backgroundColor: "pink",
    justifyContent: "space-around",
  },
  box: {
    alignItems: "center",
    width: "80%",
    flex: 0.3,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "gray",
  },
});
