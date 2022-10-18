import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectedBox from "../Components/SelectedBox";
// import { TAGDATA } from "../Data/tagData";

const OnlineGuidePage = ({ route }) => {
  const { tagList } = route.params;
  useEffect(() => {
    console.log(tagList);
  }, []);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <SelectedBox tagList={tagList} />
      <View style={styles.textBox}>
        <TextInput
          onChangeText={setText}
          value={text}
          style={styles.textAreaStyle}
          placeholder="가이드를 제공해주세요!"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>전송</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>취소</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textBox: {
    flex: 3,
    alignItems: "center",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnStyle: {
    width: "30%",
    height: "35%",
    borderRadius: 20,
    backgroundColor: "#F1694E",
    justifyContent: "center",
    alignItems: "center",
  },
  textAreaStyle: {
    padding: 10,
    flex: 4,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    width: "80%",
  },
  btnText: {
    color: "white",
  },
});
export default OnlineGuidePage;
