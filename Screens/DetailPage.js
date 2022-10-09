import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import DetailInfo from "../Components/DetailInfo";
import SelectTagList from "../Components/SelectTagList";
import Level from "../Components/Level";
import UnderBar from "../Components/UnderBar";
import instance from "../Lib/Request";
import { getCookie } from "./LoginScreen";

const DetailPage = ({ route }) => {
  const name = route.params.name;
  const guideId = route.params.guideId;
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [isOnlyOnline, setIsOnlyOnline] = useState(true);
  const getGuideData = async () => {
    try {
      await instance
        .get(`/api/guides/${guideId}`, {
          headers: {
            Authorization: `Bearer ${getCookie("authToken")}`,
          },
        })
        .then((res) => {
          setDetailData(res.data.result.data);
          setIsOnlyOnline(res.data.result.data.onlineGuiding);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getGuideData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading..</Text>
      ) : (
        <>
          <DetailInfo name={name} />
          <View style={styles.box}>
            <Text>선택된 태그</Text>
          </View>
          <View style={styles.TagListContainer}>
            <SelectTagList tagList={detailData.guideTags} />
          </View>
          <View style={styles.courseBox}>
            <Level
              onlinePrice={detailData.onlinePrice}
              offlinePrice={detailData.offlinePrice}
              isOnlyOnline={isOnlyOnline}
            />
          </View>
          <View style={styles.box}>
            <Text>가이드 소개</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.introduce}>{detailData.introduce}</Text>
          </View>
          <UnderBar />
        </>
      )}
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
