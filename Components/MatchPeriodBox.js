import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MatchPeriodBox = () => {
  // const periodInputRef = useRef();
  // const [period, setPeriod] = useState("");
  //이거 전에 컴포넌트에서 사용하던 hooks들인데, 어차피 분리한 김에 그냥 너 마음대로 코드 짜도 될 것 같아!
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>원유야 여기다가 작업하면 돼! 무리하지 말구 </Text>
      </View>
    </View>
  );
};

export default MatchPeriodBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: "center",
    //backgroundColor: "pink",
  },
  box: {
    alignItems: "center",
    width: "80%",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    borderRadius: 20,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "gray",
  },
});
