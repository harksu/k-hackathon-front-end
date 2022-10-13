import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import SearchableDropdown from "react-native-searchable-dropdown";
import Title from "../Components/Title";
import PlaceImage from "../Components/PlaceImage";
import SelectedBox from "../Components/SelectedBox";
import MatchLocationBox from "../Components/MatchLocationBox";
import MatchPeriodBox from "../Components/MatchPeriodBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";
import { CITY, STATE, TEST } from "../Data/locationData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedTag, matchRequest } from "./../Atoms/atoms";

const MatchScreen = () => {
  const drawer = useRef(null);
  const TagList = useRecoilValue(selectedTag);
  const [cityValue, setCityValue] = useState(""); // 첫번째 선택
  const [stateValue, setStateValue] = useState(""); // 두번째 선택
  const [sendLocationData, setSendLocationData] = useState(""); //서버에 보낼 값(또한 드롭퍼를 닫더라도 무엇을 골랐는지 알게 하기 위함
  const [detailLocationList, setDetailLocationList] = useState([]); //지역에 따른 조건부 선택을 위한 state

  const buttonInfoObject = {
    leftTitle: "온라인매칭",
    rightTitle: "오프라인매칭",
    leftDest: "가이드리스트",
    rightDest: "가이드리스트",
  };

  const conditionSelect = (itemlist, name) => {
    if (itemlist !== CITY) {
      console.log("이거 아니에요");
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
          // setMatch({ location: sendLocationData });
          drawer.current.closeDrawer();
        }}
      />
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
        <Title title={"홍길동님"} position={"(관광객)"} />
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
              stateValue ? cityValue.concat(stateValue) : "지역을 입력해주세요"
            }
          />
        </TouchableOpacity>
        <View style={styles.dateContainer}>
          <MatchPeriodBox />
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            {` 혼자서 어디를 가실지, 식사는 어떤 것을 골라야 할지 고민이 많으셨나요?

 이제는 혼자서 고민하지 많으시고 저희에게 맡겨주세요!
`}
          </Text>
        </View>
        <ButtonBox buttonInfoObject={buttonInfoObject} />
        <UnderBar />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  sideContainer: {
    flex: 1,
    justifyContent: "flex-start",
    //backgroundColor: "pink",
  },
  touchContainer: {
    flex: 0.5,
    //backgroundColor: "yellow",
    justifyContent: "center",
  },
  dateContainer: {
    flex: 1.5,
    marginTop: 10,
  },
  textBox: {
    flex: 0.7,
    width: "80%",
    // backgroundColor: "pink",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
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
});
