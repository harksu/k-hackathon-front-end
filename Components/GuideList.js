import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Image,
} from "react-native";
import GuideImg from "../assets/Guide.png";
import OrangeBtn from "./OrangeBtn";
import Pagenation from "./Pagenation";
import instance from "../Lib/Request";
import { getCookie } from "../Screens/LoginScreen";
import { useRecoilValue } from "recoil";
import { matchRequest } from "../Atoms/atoms";

const ITEM_LIMIT = 4;
const ITEM_WIDTH = (Dimensions.get("window").width * 45) / 100;
const ITEM_HEIGHT = (Dimensions.get("window").height * 30) / 100;
export const Item = (
  { name, discription, guideId } //FlatList에서 띄우고자 하는 item 컴포넌트 확인하시면 바로 분리할게요
) => {
  return (
    <View style={styles.item}>
      <Image style={styles.img} source={GuideImg} />
      <View style={styles.textBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.discription}>{discription}</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.btnContainer}>
          <OrangeBtn
            text={"자세히"}
            style={styles.btnStyle}
            name={name}
            guideId={guideId}
          />
        </View>
        <View style={styles.btnContainer}>
          <OrangeBtn text={"신청"} />
        </View>
      </View>
    </View>
  );
};

const GuideList = () => {
  const [page, setPage] = useState(1);
  const [guideList, setGuideList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const index = (page - 1) * ITEM_LIMIT;
  const test = useRecoilValue(matchRequest);

  useEffect(() => {
    try {
      instance("/api/guides/all", {
        headers: {
          Authorization: `Bearer ${getCookie("authToken")}`,
        },
      }).then((res) => {
        setGuideList(res.data.result.data);
        setIsLoading(false);
      });
    } catch (e) {}
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <View style={styles.container}>
          {/* 여러 리스트를 한번에 쉽게 띄울 수 있는 태그 공식문서 FlatList 참고 */}
          <FlatList
            data={guideList.slice(index, index + ITEM_LIMIT)}
            renderItem={({ item, index }) => (
              <Item
                key={item.id}
                name={item.name}
                discription={item.introduce}
                guideId={item.guideId}
              />
            )}
            numColumns={2}
          />
          <View style={styles.pagenate}>
            <Pagenation
              limit={ITEM_LIMIT}
              setPage={setPage}
              page={page}
              length={guideList.length}
            />
          </View>
        </View>
      )}
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
    alignItems: "flex-start",
  },
  btnContainer: {
    width: "30%",
    height: "70%",
  },
  pagenate: {
    height: "10%",
  },
});
