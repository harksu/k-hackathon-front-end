import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    // backgroundColor: 'red',
  },
  text: {},
});
