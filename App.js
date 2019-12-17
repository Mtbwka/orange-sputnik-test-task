import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log(123);
  return (
    <View style={styles.container}>
      <Text>Hellooooo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
