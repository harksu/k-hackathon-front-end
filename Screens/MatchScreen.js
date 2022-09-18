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
import MatchInputBox from "../Components/MatchInputBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";
import { CITY, STATE } from "../Data/locationData";

const MatchScreen = () => {
  const [location, setLocation] = useState([]);
  const [sendLocationData, setSendLocationData] = useState("");
  const buttonInfoObject = {
    leftTitle: "온라인매칭",
    rightTitle: "오프라인매칭",
    leftDest: "가이드리스트",
    rightDest: "가이드리스트",
  };

  const drawer = useRef(null);

  const DrawBar = ({ itemList, placeholder, index }) => (
    <SearchableDropdown
      onItemSelect={(item) => {
        setLocation(location.concat(item.name));
        setSendLocationData(sendLocationData.concat(" ").concat(item.name));
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
      // defaultIndex={2}
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
        value: location[index],
      }}
      listProps={{
        nestedScrollEnabled: true,
      }}
    />
  );

  const navigationView = () => (
    <View style={styles.sideContainer}>
      <DrawBar itemList={CITY} placeholder="지역을 골라주세요" index={0} />
      <DrawBar
        itemList={STATE}
        placeholder="세부 지역을 골라주세요"
        index={1}
      />
      <Button
        title="선택 완료"
        onPress={() => {
          drawer.current.closeDrawer();
          setLocation([]);
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
        <SelectedBox />
        <TouchableOpacity
          onPress={() => {
            drawer.current.openDrawer();
            setSendLocationData("");
          }}
          style={styles.container}
        >
          <MatchInputBox
            locationInput={
              sendLocationData ? sendLocationData : "지역을 입력해주세요"
            }
          />
        </TouchableOpacity>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            {` 혼자서 어디를 가실지, 식사는 어떤 것을 골라야 할지 고민이 많으셨나요?

 이제는 혼자서 고민하지 많으시고 저희에게 맡겨주세요!

 다양한 가이드가 당신의 여행을 더 완벽하게 만들어 줄거랍니다`}
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
  textBox: {
    flex: 0.7,
    width: "80%",
    //backgroundColor: "pink",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: { textAlign: "left", fontSize: 12 },
});
