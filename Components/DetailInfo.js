import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import GuideImg from "../assets/Guide.png";
import instance from "../Lib/Request";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { matchRequest, modal } from "../Atoms/atoms";
const ITEM_WIDTH = (Dimensions.get("window").width * 80) / 100;
const ITEM_HEIGHT = (Dimensions.get("window").height * 35) / 200;

const DetailInfo = ({ name, guideId }) => {
  const match = useRecoilValue(matchRequest);
  const ismodal = useRecoilValue(modal);
  const setmodal = useSetRecoilState(modal);
  const onpress = () => {
    setmodal(!ismodal);
    console.log(guideId, match);
    instance
      .post(`/api/matches/${guideId}`, match)
      .then((res) => console.log("response", res))
      .catch((err) => console.log(err.response.data.result.msg));
    if (!ismodal) {
      setTimeout(() => {
        setmodal(false);
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={GuideImg} />
      <View style={styles.infoBox}>
        <Text style={styles.titleText}>가이드</Text>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.Buttonbox}>
          <TouchableOpacity style={styles.button} onPress={onpress}>
            <Text style={styles.buttonText}>신청하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>전화연결</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(226, 226, 226, 0.67)",
    alignItems: "center",
  },
  img: {
    width: "45%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  modalContainer: { flex: 2, height: "100%", backgroundColor: "pink" },
  infoBox: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
    padding: 2,
  },
  Buttonbox: {
    flex: 0.7,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "33%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 2,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "orange",
    padding: 5,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
  nameText: {
    textAlign: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 10,
    padding: 2,
  },
});
