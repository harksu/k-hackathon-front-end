import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { matchRequest } from "../Atoms/atoms";
import instance from "../Lib/Request";
const OrangeBtn = ({ text, name, guideId, event }) => {
  const navigation = useNavigation();
  const [match, setMatch] = useRecoilState(matchRequest);
  const goDetail = () => {
    if (text === "자세히") {
      navigation.push("디테일페이지", { name: name, guideId: guideId }); //여기서 props 같이 남겨야됨 ;
    } else if (text === "신청") {
      setMatch({ ...match, userRequest: "없습니다." });
      console.log({ ...match });
      setTimeout(() => {
        instance
          .post(`/api/matches/${guideId}`, {
            ...match,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }, 500);
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
