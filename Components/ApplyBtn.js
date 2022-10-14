import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ApplyBtn = ({ name, destnation }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.btnBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(destnation);
          }}
        >
          <Text style={styles.btnTxt}>{name}</Text>
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
