import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
const Pagenation = ({ limit, page, setPage, length }) => {
  const endPage = Math.ceil((length - 1) / limit);
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={bStyle((page / endPage).toFixed(2)).curBar}></View>
      </View>
      <View style={styles.page}>
        <TouchableOpacity
          onPress={() => {
            setPage((page) => page - 1);
          }}
          disabled={page === 1}
        >
          <Text>&lt;</Text>
        </TouchableOpacity>
        <Text>
          {page}/{endPage}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setPage((page) => page + 1);
          }}
          disabled={page === endPage}
        >
          <Text>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    alignSelf: "center",
    flew: 1,
    width: "70%",
    height: "10%",
    borderWidth: 1,
    marginBottom: 20,
  },

  page: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
const bStyle = (curPercent) =>
  StyleSheet.create({
    curBar: {
      backgroundColor: "black",
      width: `${curPercent * 100}%`,
      height: `90%`,
    },
  });

export default Pagenation;
