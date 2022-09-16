import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../Components/Title";
import PlaceImage from "../Components/PlaceImage";
import SelectedBox from "../Components/SelectedBox";
import MatchInputBox from "../Components/MatchInputBox";
import ButtonBox from "../Components/ButtonBox";
import UnderBar from "../Components/UnderBar";

const MatchScreen = () => {
  const buttonInfoObject = {
    leftTitle: "온라인매칭",
    rightTitle: "오프라인매칭",
    leftDest: "가이드리스트",
    rightDest: "가이드리스트",
  };

  return (
    <View style={styles.container}>
      <Title title={"홍길동님"} position={"(관광객)"} />
      <PlaceImage />
      <SelectedBox />
      <MatchInputBox locationInput="여행지를 입력해주세요" />
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
  );
};

export default MatchScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  textBox: {
    flex: 0.7,
    width: "80%",
    //backgroundColor: "pink",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: { textAlign: "left", fontSize: 12 },
});
