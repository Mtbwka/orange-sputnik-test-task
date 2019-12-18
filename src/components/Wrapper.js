import React from 'react';
import { View, StyleSheet } from 'react-native';

const Wrapper = ({ children, style }) => {
  return <View style={[styles.containerStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    margin: 15
  }
});

export default Wrapper;
