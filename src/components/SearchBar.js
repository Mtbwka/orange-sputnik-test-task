import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ city, onCityChange, onCitySubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' style={styles.iconStyle} />
      <TextInput
        value={city}
        placeholder='Seach'
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onCityChange}
        onEndEditing={onCitySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
    paddingVertical: 10
  }
});

export default SearchBar;
