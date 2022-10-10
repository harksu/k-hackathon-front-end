import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import DetailInfo from "../Components/DetailInfo";
import SelectTagList from "../Components/SelectTagList";
import Level from "../Components/Level";
import UnderBar from "../Components/UnderBar";
import instance from "../Lib/Request";
import { getCookie } from "./LoginScreen";
import { useRecoilState, useRecoilValue } from "recoil";
import { matchRequest, modal } from "../Atoms/atoms";

const Modal = () => {
  const match = useRecoilValue(matchRequest);

  const { online, userRequest, period } = match;
  return (
    <View style={styles.modalContainer}>
      <Text>요청 정보는 {online}입니다.</Text>
      <Text>요청 정보는 {userRequest}입니다.</Text>
      <Text>요청 정보는 {period}입니다.</Text>
    </View>
  );
};

const DetailPage = ({ route }) => {
  const ismodal = useRecoilValue(modal);
  const name = route.params.name;
  const guideId = route.params.guideId;
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [isOnlyOnline, setIsOnlyOnline] = useState(true);
  const [match, setMatch] = useRecoilState(matchRequest);
  const [request, setRequest] = useState("");

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
          {ismodal && <Modal key={name} />}
          <DetailInfo name={name} guideId={guideId} />
          {!ismodal && (
            <View style={styles.box}>
              <Text>선택된 태그</Text>
            </View>
          )}
          <View style={styles.TagListContainer}>
            <SelectTagList tagList={detailData.guideTags} />
          </View>
          {!ismodal && (
            <View style={styles.courseBox}>
              <Level
                onlinePrice={detailData.onlinePrice}
                offlinePrice={detailData.offlinePrice}
                isOnlyOnline={isOnlyOnline}
              />
            </View>
          )}
          {!ismodal && (
            <View style={styles.box}>
              <Text>가이드 소개</Text>
            </View>
          )}
          {!ismodal && (
            <View style={styles.temp}>
              <Text style={styles.introduce}>{detailData.introduce}</Text>
            </View>
          )}
          {!ismodal && (
            <View style={styles.temp}>
              <TextInput
                placeholder="요청사항을 말씀해주세요"
                value={request}
                onChangeText={setRequest}
                textAlign={"center"}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  setMatch({ ...match, userRequest: request });
                  Keyboard.dismiss();
                }}
              />
            </View>
          )}
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
  modalContainer: {
    flex: 10,
    backgroundColor: "pink",
    hegiht: "80%",
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
