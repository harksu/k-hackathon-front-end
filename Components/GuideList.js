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
const ITEM_WIDTH = (Dimensions.get("window").width * 45) / 100;
const ITEM_HEIGHT = (Dimensions.get("window").height * 30) / 100;

const Item = ({ name, discription }) => (
  <View style={styles.item}>
    <Image style={styles.img} source={GuideImg} />
    <View style={styles.textBox}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.discription}>{discription}</Text>
    </View>
    <View style={styles.button}></View>
  </View>
);

const GuideList = () => {
  return (
    <View style={styles.container}>
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
  },
});
