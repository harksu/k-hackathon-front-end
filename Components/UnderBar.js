import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const UnderBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../assets/feather_search.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/Profile.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/Vector.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../assets/Category.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default UnderBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    // backgroundColor: 'yellow',
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 1,
  },
});
