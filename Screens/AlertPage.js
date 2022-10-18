import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import instance from "../Lib/Request";
import AlertItem from "../Components/Alert";
import SelectedBox from "../Components/SelectedBox";
import { useNavigation } from "@react-navigation/native";

const AlertPage = () => {
  const [guideClick, setGuideClick] = useState(true);
  const [guideAlert, setGuideAlert] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [pressId, setPressId] = useState();
  const [matchData, setMatchData] = useState();
  const [matchLoading, setMatchLoading] = useState(true);
  const navigate = useNavigation();
  const handleAccept = async (matchId) => {
    try {
      await instance
        .post(`/api/matches/guider/list/waited/${matchId}`)
        .then(() => {
          Alert.alert("요청이 수락되었습니다.");
          setGuideAlert((prev) =>
            prev.filter((item) => item.matchId !== matchId)
          );
          setModalVisible((prev) => !prev);
          navigate.push("온라인가이딩", {
            tagList: matchData.userInfo.tags,
          });
        });
    } catch (e) {}
  };
  const handleRefuse = async (matchId) => {
    try {
      await instance
        .delete(`/api/matches/guider/list/waited/${matchId}`)
        .then(() => {
          Alert.alert("요청이 거절되었습니다.");
          setGuideAlert((prev) =>
            prev.filter((item) => item.matchId !== matchId)
          );
          setModalVisible((prev) => !prev);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const getAlertList = async () => {
    try {
      await instance.get("/api/matches/guider/list/waited").then((res) => {
        setGuideAlert(res.data.result.data);
      });
    } catch (e) {}
  };
  const getDetailData = async (matchId) => {
    try {
      await instance.get(`/api/matches/${matchId}`).then((res) => {
        setMatchData(res.data.result.data);
        setMatchLoading(false);
      });
    } catch (e) {}
  };
  useEffect(() => {
    if (pressId) {
      getDetailData(pressId);
    }
  }, [pressId]);
  useEffect(() => {
    getAlertList();
  }, []);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible((prev) => !prev);
        }}
      >
        <View style={styles.modalContainer}>
          {!matchLoading ? (
            <>
              <View style={styles.modalTextBox}>
                <Text style={styles.modalTextStyle}>
                  이름 : {matchData.userInfo.name}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <SelectedBox tagList={matchData.userInfo.tags} />
              </View>
              <View style={styles.modalTextBox}>
                <Text style={styles.modalTextStyle}>
                  기간 : {matchData.matchInfo.period}
                </Text>
              </View>
              <View style={styles.modalTextBox}>
                <Text style={styles.modalTextStyle}>
                  선택한 가이드 방식 :{" "}
                  {matchData.matchInfo.isOnline ? "온라인" : "오프라인"}
                </Text>
              </View>
              <View style={styles.modalTextBox}>
                <Text style={styles.modalTextStyle}>
                  선택한 가격 : {matchData.matchInfo.pay}
                </Text>
              </View>

              <View style={styles.modalBtnBox}>
                <TouchableOpacity
                  onPress={() => {
                    handleAccept(matchData.matchInfo.matchId);
                  }}
                  style={styles.modalBtnStyle}
                >
                  <Text>수락</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleRefuse(matchData.matchInfo.matchId);
                  }}
                  style={styles.modalBtnStyle}
                >
                  <Text>거절</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </Modal>
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
      <View style={styles.AlertBox}>
        {guideClick ? (
          guideAlert && (
            <FlatList
              style={{ flexGrow: 0 }}
              data={guideAlert}
              renderItem={({ item }) => (
                <AlertItem
                  matchId={item.matchId}
                  name={item.name}
                  setGuideAlert={setGuideAlert}
                  setModalVisible={setModalVisible}
                  setPressId={setPressId}
                />
              )}
            />
          )
        ) : (
          <></>
        )}
      </View>
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
    flex: 6,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
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
  modalContainer: {
    flex: 4,
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    alignSelf: "center",
    paddingVertical: 30,
  },
  modalTextBox: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  modalTextStyle: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  modalBtnBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  modalBtnStyle: {
    width: "30%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
  },
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
