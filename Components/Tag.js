import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedTag } from "../Atoms/atoms";

const Tag = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const selected = useRecoilValue(selectedTag);
  const setSelected = useSetRecoilState(selectedTag);
  const count = selected.length;
  const Click = (e) => {
    if (count < 4) {
      //선택 리스트 셋
      setIsClicked(!isClicked);
      setSelected(selected.concat({ tag: name })); //리넥은 e.target.value가 안쳐먹는다
    }
    if (count >= 0 && isClicked) {
      //선택 리스트 취소 셋
      setIsClicked(!isClicked);
      const newSelectedList = selected.filter((tag) => tag.tag !== name);
      setSelected(newSelectedList);
    }
  };
  return (
    <View style={[styles.container, isClicked && styles.clickedContainer]}>
      <TouchableOpacity onPressIn={Click}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
    flexBasis: "22%",
    backgroundColor: "#c4c4c4",
    height: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    justifyContent: "center",
    margin: 3,
  },
  clickedContainer: {
    flex: 1,
    flexShrink: 1,
    flexBasis: "22%",
    backgroundColor: "#F1694E",
    height: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(230, 230, 230, .5)",
    justifyContent: "center",
    margin: 3,
  },
  text: { textAlign: "center", color: "white" },
});
