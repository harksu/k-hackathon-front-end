import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
//버튼을 따로 분리
const OrangeBtn = ({ text, name, guideId }) => {
  const navigation = useNavigation();
  const goDetail = () => {
    if (text === "자세히") {
      navigation.push("디테일페이지", { name: name, guideId: guideId }); //여기서 props 같이 남겨야됨 ;
      // console.log(name); // 이제 이걸로 북치고 장구치고 하면 될 듯
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPressIn={goDetail}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OrangeBtn;
