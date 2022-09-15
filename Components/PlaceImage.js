import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import placeimg from "../assets/place.png";

const PlaceImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={placeimg} style={styles.img} />
    </View>
  );
};

export default PlaceImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  img: {
    flex: 1,
  },
});
