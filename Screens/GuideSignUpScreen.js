import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Button,
  Keyboard,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchableDropdown from "react-native-searchable-dropdown";
import PlaceImage from "../Components/PlaceImage";
import SelectedBox from "../Components/SelectedBox";
import MatchLocationBox from "../Components/MatchLocationBox";
import { CITY, STATE, TEST } from "../Data/locationData";
import instance from "./../Lib/Request";
import { useRecoilValue } from "recoil";
import { selectedTag } from "./../Atoms/atoms";

const GuideSignUpScreen = () => {
  const drawer = useRef(null);

  const [cityValue, setCityValue] = useState(""); // 첫번째 선택
  const [stateValue, setStateValue] = useState(""); // 두번째 선택
  const [sendLocationData, setSendLocationData] = useState(""); //서버에 보낼 값(또한 드롭퍼를 닫더라도 무엇을 골랐는지 알게 하기 위함
  const [detailLocationList, setDetailLocationList] = useState([]); //지역에 따른 조건부 선택을 위한 state

  const [basicPirce, setBasicPrice] = useState(0);
  const [premiumPirce, setPremiumPirce] = useState(0);
  const [introuduce, setIntroduce] = useState(""); // 그냥 이번 플젝은 코드 다 state로 쪼개서 하자..

  const TagList = useRecoilValue(selectedTag);
  const conditionSelect = (itemlist, name) => {
    if (itemlist !== CITY) {
      return;
    }
    if (name === "제주도") {
      setDetailLocationList(STATE);
    } else if (name === "부산") {
      setDetailLocationList(TEST);
    } else {
      setDetailLocationList([]);
      setStateValue(""); // 처음이 이상한거면 2번째는 아무것도 없어야됨
      //이거 마지막에 데이터 배열 추가할 때 아무것도 없으면 마지막에 else로 빼야 겠다
    }
  };

  const navigation = useNavigation();

  const DrawBar = ({ itemList, placeholder, value }) => (
    <SearchableDropdown
      onItemSelect={(item) => {
        conditionSelect(itemList, item.name);
        setSendLocationData(sendLocationData.concat(" ").concat(item.name));
        {
          value === cityValue
            ? setCityValue(item.name)
            : setStateValue(item.name);
        }
      }}
      containerStyle={{ padding: 5 }}
      itemStyle={{
        padding: 10,
        marginTop: 2,
        backgroundColor: "#ddd",
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 5,
      }}
      itemTextStyle={{ color: "#222" }}
      itemsContainerStyle={{ maxHeight: 140 }}
      items={itemList}
      resetValue={false}
      textInputProps={{
        placeholder: placeholder,
        underlineColorAndroid: "transparent",
        style: {
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
        },
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );

  const navigationView = () => (
    <View style={styles.sideContainer}>
      <DrawBar
        itemList={CITY}
        placeholder="지역을 골라주세요"
        value={cityValue ? cityValue : ""}
      />
      <DrawBar
        itemList={detailLocationList}
        placeholder="세부 지역을 골라주세요"
        value={stateValue}
      />
      {/* 안드로이드로 테스트 해보니까 입력 이벤트 씹혀서 조건부로 변경  */}
      {cityValue && (
        <Text style={styles.choiceText}>
          선택값 1 ➡ {cityValue} , 선택값 2 ➡ {stateValue}
        </Text>
      )}
      <Button
        title="선택 완료"
        onPress={() => {
          drawer.current.closeDrawer();
        }}
      />
    </View>
  );

  const GuideSignUpButton = () => (
    <View style={styles.buttonContainer}>
      <View style={styles.Buttonbox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            instance
              .post("/api/guides", {
                introduce: introuduce,
                isOnlineGuiding: true,
                offlinePrice: basicPirce,
                onlinePrice: premiumPirce,
                place: {
                  city: cityValue,
                  gu: stateValue,
                },
              })
              .then((res) => {
                console.log(res);
                Alert.alert("등록성공");
                navigation.push("메인페이지");
              })
              .catch((err) => console.log(err));
          }}
        >
          <Text style={styles.buttontext}>온라인등록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            instance
              .post("/api/guides", {
                introduce: introuduce,
                isOnlineGuiding: false,
                offlinePrice: basicPirce,
                onlinePrice: premiumPirce,
                place: {
                  city: cityValue,
                  gu: stateValue,
                },
              })
              .then((response) => {
                Alert.alert("등록성공");
                navigation.push("메인페이지");
              })
              .catch();
          }}
        >
          <Text style={styles.buttontext}>오프라인등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
      style={{ backgroundColor: "pink" }}
    >
      <View style={styles.container}>
        <Title title={"홍길동님"} position={"(가이드)"} />
        <PlaceImage />
        <SelectedBox tagList={TagList} />
        <TouchableOpacity
          onPress={() => {
            drawer.current.openDrawer();
            setSendLocationData("");
          }}
          style={styles.touchContainer}
        >
          <MatchLocationBox
            locationInput={
              stateValue
                ? cityValue.concat(stateValue)
                : "가이드 장소를 입력해주세요"
            }
          />
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <View style={styles.priceInputContainer}>
            <Text>베이직</Text>
            <TextInput
              placeholder="500원"
              value={basicPirce}
              onChangeText={setBasicPrice}
              textAlign={"center"}
            />
          </View>
          <View style={styles.priceInputContainer}>
            <Text>프리미엄</Text>
            <TextInput
              placeholder="1000원"
              value={premiumPirce}
              onChangeText={setPremiumPirce}
              textAlign={"center"}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="자기소개를 입력해주세요!"
            value={introuduce}
            onChangeText={setIntroduce}
            textAlign={"center"}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <GuideSignUpButton />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default GuideSignUpScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  sideContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  touchContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  priceContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  priceInputContainer: {
    justifyContent: "center",
  },
  inputContainer: {
    flex: 1.5,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
  },
  text: { textAlign: "left", fontSize: 10 },
  choiceText: {
    marginTop: "auto",
    marginBottom: "auto",
    alignSelf: "center",
    backgroundColor: "pink",
    color: "blue",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 0.5,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Buttonbox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "40%",
    height: "66%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "orange",
    backgroundColor: "white",
    padding: 5,
  },
  buttontext: {
    fontWeight: "bold",
  },
});
