import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Buttonbox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>취소하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    //backgroundColor: 'green',
  },
  Buttonbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'white',
    padding: 5,
  },
  text: {
    fontWeight: 'bold',
  },
});
