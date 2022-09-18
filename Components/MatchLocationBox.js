import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MatchLocationBox = ({ locationInput }) => {
  // const periodInputRef = useRef();

  // const [period, setPeriod] = useState("");

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

      {/* <View style={styles.box}>
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
      </View> */}
    </View>
  );
};

export default MatchLocationBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    //backgroundColor: "pink",
  },
  box: {
    alignItems: "center",
    width: "80%",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    justifyContent: "center",
    //backgroundColor: "pink",
  },
  text: {
    textAlign: "center",
    color: "gray",
  },
});
