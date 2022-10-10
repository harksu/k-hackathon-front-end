import { View, Text, TouchableOpacity, Touchable } from "react-native";
import UnderBar from "../Components/UnderBar";
import { StyleSheet } from "react-native";
import { useState } from "react";

const AlertPage = () => {
  const [guideClick, setGuideClick] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.select}>
        <TouchableOpacity
          style={titleStyle(guideClick).guideBox}
          onPress={() => {
            setGuideClick(true);
          }}
        >
          <Text style={styles.guideText}>가이드</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={titleStyle(guideClick).travelerBox}
          onPress={() => {
            setGuideClick(false);
          }}
        >
          <Text style={styles.travelerText}>여행객</Text>
        </TouchableOpacity>
      </View>
      {guideClick ? (
        <View style={styles.AlertBox}>
          <View style={styles.guideAlert}>
            <View style={styles.guideAlertTextBox}>
              <Text>00님의 매칭 신청</Text>
            </View>
            <View style={styles.guideAlertBtnBox}>
              <View style={styles.confirmBtnBox}>
                <TouchableOpacity style={styles.guideBtn}>
                  <Text>수락</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.guideBtn}>
                  <Text>거절</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.detailBtnBox}>
                <TouchableOpacity style={styles.guideBtn}>
                  <Text>자세히</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.AlertBox}></View>
      )}
      <UnderBar />
    </View>
  );
};

export default AlertPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    alignItems: "flex-end",
  },

  guideText: {
    fontSize: 25,
  },

  travelerText: {
    fontSize: 25,
  },
  AlertBox: {
    flex: 9,
  },
  guideAlert: {
    width: "80%",
    height: "15%",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
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
  travelerAlertBox: {},
});

const titleStyle = (clicked) =>
  StyleSheet.create({
    guideBox: {
      flex: 1,
      alignItems: "center",
      borderBottomWidth: clicked ? 1 : 0,
    },
    travelerBox: {
      flex: 1,
      alignItems: "center",
      borderBottomWidth: clicked ? 0 : 1,
    },
  });
