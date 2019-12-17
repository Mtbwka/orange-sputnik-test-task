import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const WeatherScreen = () => {
  const [city, setCity] = useState('');

  return (
    <View>
      <SearchBar city={city} onCityChange={newCity => setCity(newCity)} />
      <Text>WeatherScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WeatherScreen;
