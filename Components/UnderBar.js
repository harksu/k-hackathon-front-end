import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UnderBar = () => {
  return (
    <View style={styles.container}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
    </View>
  );
};

export default UnderBar;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 1,
  },
});
