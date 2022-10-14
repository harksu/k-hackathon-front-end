import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import instance from "../Lib/Request";
import { useNavigation } from "@react-navigation/native";

const AlertItem = ({
  matchId,
  name,
  setGuideAlert,
  setModalVisible,
  setPressId,
}) => {
  const handleAccept = async () => {
    try {
      await instance
        .post(`/api/matches/guider/list/waited/${matchId}`)
        .then(() => {
          Alert.alert("요청이 수락되었습니다.");
          setGuideAlert((prev) =>
            prev.filter((item) => item.matchId !== matchId)
          );
        });
    } catch (e) {}
  };

  const handleRefuse = () => {
    Alert.alert("요청이 거절되었습니다.");
    setGuideAlert((prev) => prev.filter((item) => item.matchId !== matchId));
  };
  const navigate = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.guideAlert}>
        <View style={styles.guideAlertTextBox}>
          <Text>{name}님의 매칭 신청</Text>
        </View>
        <View style={styles.guideAlertBtnBox}>
          <View style={styles.confirmBtnBox}>
            <TouchableOpacity onPress={handleAccept} style={styles.guideBtn}>
              <Text>수락</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRefuse} style={styles.guideBtn}>
              <Text>거절</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailBtnBox}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible((prev) => !prev);
                setPressId(matchId);
              }}
              style={styles.guideBtn}
            >
              <Text>자세히</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    height: "30%",
    alignItems: "center",
  },
  guideAlert: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    height: "100%",
    width: "80%",
  },
  guideAlertTextBox: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  guideAlertBtnBox: {
    flex: 1,
  },
  confirmBtnBox: {
    flex: 1,
    flexDirection: "row",
  },
  detailBtnBox: {
    flex: 1,
  },
  guideBtn: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default AlertItem;
