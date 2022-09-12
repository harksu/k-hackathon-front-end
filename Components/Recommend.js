import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import img1 from "../assets/김천축제.png";
import img2 from "../assets/남이섬축제.png";
import img3 from "../assets/부여축제.png";
import img4 from "../assets/전주축제.png";

const Recommend = () => {
  const [firstIdx, setFirstIdx] = useState();
  const [secondIdx, setSecondIdx] = useState();
  const imgArr = [img1, img2, img3, img4];
  useEffect(() => {
    setImgIdx();
  }, []);

  const setImgIdx = () => {
    setFirstIdx(Math.floor(Math.random() * imgArr.length));
    setSecondIdx(Math.floor(Math.random() * imgArr.length));
    while (firstIdx !== secondIdx)
      setSecondIdx(Math.floor(Math.random() * imgArr.length));
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>여긴 어떠세요?</Text>
      </View>
      <View style={styles.imgContainer}>
        <ImageBackground source={imgArr[firstIdx]} style={styles.firstImg} />
        <ImageBackground source={imgArr[secondIdx]} style={styles.secondImg} />
      </View>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: "center",
  },
  box: {
    flex: 0.1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "80%",
  },
  imgContainer: {
    flex: 1,
    width: "80%",
  },
  firstImg: {
    flex: 1,
    backgroundColor: "black",
  },
  secondImg: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 10,
  },
});
