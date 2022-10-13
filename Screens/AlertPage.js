import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import UnderBar from "../Components/UnderBar";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import instance from "../Lib/Request";
import AlertItem from "../Components/Alert";
import { GuideAlertData } from "../Data/GuideAlertData";
const ITEM_HEIGHT = (Dimensions.get("window").height * 20) / 100;

const AlertPage = () => {
  const [guideClick, setGuideClick] = useState(true);
  const [guideAlert, setGuideAlert] = useState([]);
  const getAlertList = async () => {
    // try {
    //   await instance.get("/api/matches/guider/list/waited").then((res) => {
    //     setGuideAlert(res.data.result.data);
    //     console.log(res.data);
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
    setGuideAlert(GuideAlertData);
    console.log(GuideAlertData);
  };
  useEffect(() => {
    getAlertList();
  }, []);
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
                />
              )}
              getItemLayout={(data, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index,
                index,
              })}
            />
          )
        ) : (
          <></>
        )}
      </View>
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
