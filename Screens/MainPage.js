import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import SelectedBox from "../Components/SelectedBox";
import Recommend from "../Components/Recommend";
import ApplyBtn from "../Components/ApplyBtn";
import { useSetRecoilState } from "recoil";
import { selectedTag } from "./../Atoms/atoms";
import axios from "axios";

const MainPage = () => {
  const [myTag, setMyTag] = useState([]);
  const setTag = useSetRecoilState(selectedTag);
  const getMyTag = async () => {
    try {
      await axios.get("/api/tags").then((res) => {
        setMyTag(res.data.result.data);
        setTag(res.data.result.data);
      });
    } catch (e) {}
  };
  useEffect(() => {
    setTimeout(() => {
      getMyTag();
    }, 500);
  }, []);
  return (
    <View style={styles.container}>
      {myTag && <SelectedBox tagList={myTag} />}
      <Recommend />
      <View style={styles.btnContainer}>
        <ApplyBtn name="관광객 등록" destnation="매칭페이지" />
        <ApplyBtn name="가이드 등록" destnation="가이드매칭페이지" />
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  btnContainer: {
    flex: 0.6,
    flexDirection: "row",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
