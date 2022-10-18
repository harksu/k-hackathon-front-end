import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const RHeader = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("알림함페이지");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Feather name="bell" size={24} color="black" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RHeader;
