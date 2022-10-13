import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UnderBar = () => {
  const navigation = useNavigation();
  //이거 라우터도 같이 고민 ㄱ
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 1,
  },
});
