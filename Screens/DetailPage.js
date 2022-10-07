import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import DetailInfo from "../Components/DetailInfo";
import SelectTagList from "../Components/SelectTagList";
import Level from "../Components/Level";
import UnderBar from "../Components/UnderBar";
import { DetailData } from "../Data/GuideDetailData";

const DetailPage = ({ route }) => {
  const name = route.params.name;
  const guideId = route.params.id;
  const periodRef = useRef();
  const dateRef = useRef();
  const matchMethodRef = useRef();
  const callNumberRef = useRef();
  const emailRef = useRef();
  const specialRequestRef = useRef();
  const [detailData, setDetailData] = useState(DetailData.result.data);
  const [focusInput, setFocusInput] = useState(periodRef);

  const [period, setPeriod] = useState("");
  const [date, setDate] = useState("");
  const [method, setMethod] = useState("");
  const [callNumber, setCallNumber] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  //spread쓰려다가 입력 순서 개판일 때 대비해서 그냥 상태 여러개로 늘렸습니다
  const [sendRequest, setSendRequest] = useState({});

  const sendRequestInfomation = () => {
    setSendRequest({
      period: period,
      date: date,
      method: method,
      callNumber: callNumber,
      email: email,
      specialRequest: specialRequest,
    });
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <DetailInfo name={name} sendRequest={sendRequest} />
      <View style={styles.box}>
        <Text>선택된 태그</Text>
      </View>
      <View style={styles.TagListContainer}>
        <SelectTagList />
      </View>
      <View style={styles.courseBox}>
        <Level
          onlinePrice={detailData.onlinePrice}
          offlinePrice={detailData.offlinePrice}
        />
      </View>
      <View style={styles.box}>
        <Text>가이드 소개</Text>
      </View>
      <View style={styles.temp}>
        <Text style={styles.introduce}>{detailData.introduce}</Text>
      </View>
      <UnderBar />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
    overflow: "scroll",
  },
  box: {
    flex: 0.2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
    marginBottom: 10,
    //backgroundColor: "pink",
  },
  TagListContainer: {
    width: "80%",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    // backgroundColor: "pink",
    //flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10,
  },

  courseBox: {
    flex: 0.4,
    // backgroundColor: "pink",
    width: "80%",
    // overflow: "scroll",
  },
  temp: {
    flex: 1.2,
    justifyContent: "flex-start",
    color: "black",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    // backgroundColor: "red",
    width: "80%",
    overflow: "scroll",
  },
  introduce: {
    margin: 20,
  },
});
