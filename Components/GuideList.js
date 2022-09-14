//가이드 리스트 페이지

import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { ListData } from "../Data/GuideListData";
import GuideImg from "../assets/Guide.png";
import OrangeBtn from "./OrangeBtn";
const ITEM_WIDTH = (Dimensions.get("window").width * 45) / 100;
const ITEM_HEIGHT = (Dimensions.get("window").height * 30) / 100;

const Item = (
  { name, discription } //FlatList에서 띄우고자 하는 item 컴포넌트 확인하시면 바로 분리할게요
) => (
  <View style={styles.item}>
    <Image style={styles.img} source={GuideImg} />
    <View style={styles.textBox}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.discription}>{discription}</Text>
    </View>
    <View style={styles.button}>
      <View style={styles.btnContainer}>
        <OrangeBtn text={"자세히"} style={styles.btnStyle} />
      </View>
      <View style={styles.btnContainer}>
        <OrangeBtn text={"신청"} />
      </View>
    </View>
  </View>
);

const GuideList = () => {
  return (
    <View style={styles.container}>
      {/* 여러 리스트를 한번에 쉽게 띄울 수 있는 태그 공식문서 FlatList 참고 */}
      <FlatList
        data={ListData}
        renderItem={({ item, index }) => (
          <Item key={item.id} name={item.name} discription={item.discription} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default GuideList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "rgba(226, 226, 226, 0.67)",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textBox: {
    width: "80%",
    height: "35%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  name: {},
  discription: {
    fontSize: 10,
  },
  button: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnContainer: {
    width: "30%",
  },
});
