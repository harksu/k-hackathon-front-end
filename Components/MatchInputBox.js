import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  DrawerLayoutAndroid,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";

const MatchInputBox = ({ locationInput }) => {
  const locationInputRef = useRef();
  const periodInputRef = useRef();
  const drawer = useRef(null);

  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");
  const [focusInput, setFocusInput] = useState(locationInputRef); // 사실 이거 필요없음

  const navigationView = () => (
    <View style={styles.container}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
      style={{ backgroundColor: "pink" }}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Text>{locationInput} </Text>
          </TouchableOpacity>
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
    </DrawerLayoutAndroid>
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
  },
});
