import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SelectedBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>선택된 테마 목록</Text>
      </View>
      <View style={styles.tagbox}></View>
    </View>
  );
};

export default SelectedBox;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  box: {
    flex: 0.2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
    //나중에 포커스 될 때만 색깔 바꾸고
  },
  tagbox: {
    width: '80%',
    // backgroundColor: 'black',
    flex: 1,
    borderWidth: 2,
    borderColor: 'rgba(230, 230, 230, .5)',
    borderRadius: 20,
  },
});