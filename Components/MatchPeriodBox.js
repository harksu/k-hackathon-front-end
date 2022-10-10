import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { matchRequest } from "../Atoms/atoms";

const MatchPeriodBox = () => {
  // const periodInputRef = useRef();
  // const [period, setPeriod] = useState("");
  //이거 전에 컴포넌트에서 사용하던 hooks들인데, 어차피 분리한 김에 그냥 너 마음대로 코드 짜도 될 것 같아!
  const [startDateVisible, setStartDateVisible] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const setMatch = useSetRecoilState(matchRequest);
  const dateParse = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>여행 날짜를 선택해주세요</Text>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>여행 시작</Text>
          <TouchableOpacity
            style={styles.dateStyle}
            onPress={() => setStartDateVisible(true)}
          >
            {startDate ? (
              <Text style={styles.text}>{dateParse(startDate)}</Text>
            ) : (
              <Text style={styles.text}>시작 날짜를 선택해주세요</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>여행 마무리</Text>
          <TouchableOpacity
            style={styles.dateStyle}
            onPress={() => {
              setEndDateVisible(true);
            }}
          >
            {endDate ? (
              <Text style={styles.text}>{dateParse(endDate)}</Text>
            ) : (
              <Text style={styles.text}>마무리 날짜를 선택해주세요</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePickerModal
        isVisible={startDateVisible}
        mode="date"
        onConfirm={(date) => {
          setStartDate(date);
          setStartDateVisible(false);
        }}
        onCancel={() => setStartDateVisible(false)}
      />
      <DateTimePickerModal
        isVisible={endDateVisible}
        mode="date"
        onConfirm={(date) => {
          setEndDate(date);
          setMatch({
            period: `${dateParse(startDate)} ~ ${dateParse(endDate)}`,
          });
          console.log("gd");
          setEndDateVisible(false);
        }}
        onCancel={() => setEndDateVisible(false)}
      />
    </View>
  );
};

export default MatchPeriodBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    //backgroundColor: "pink",
  },
  box: {
    alignItems: "flex-start",
    width: "80%",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  dateText: {
    width: "20%",
    fontSize: 12,
    textAlign: "center",
    color: "gray",
  },
  dateStyle: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "rgba(230, 230, 230, .5)",
    alignItems: "center",
    color: "grey",
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "gray",
  },
});
