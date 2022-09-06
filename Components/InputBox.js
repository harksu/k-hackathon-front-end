import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InputBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>이름을 입력해주세요</Text>
      </View>
      <View style={styles.box}>
        <Text>사용하실 ID를 입력해주세요</Text>
      </View>
      <View style={styles.box}>
        <Text>사용하실 PW를 입력해주세요</Text>
      </View>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
    flex: 0.25,
    //나중에 포커스 될 때만 색깔 바꾸고
    borderWidth: 2,
    borderColor: 'rgba(230, 230, 230, .5)',
    borderRadius: 20,
  },
});
