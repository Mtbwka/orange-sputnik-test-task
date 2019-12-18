import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Error = ({ errorMessage }) => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  textStyle: {
    color: 'black',
    fontSize: 18
  }
});

export default Error;
