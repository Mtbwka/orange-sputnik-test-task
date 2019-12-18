import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Wrapper from '../components/Wrapper';
import Error from '../components/Error';
import Graph from '../components/Graph';
import axios from 'axios';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const apiKey = ''; //API KEY
  const weatherApi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?APPID=${apiKey}&units=metric&q=${city}`
      );
      setData(response.data);
      setErrorMessage(null);
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 404)
        setErrorMessage(error.response.data.message);
      else setErrorMessage('Something went wrong');
    }
  };

  return (
    <>
      <Wrapper>
        <SearchBar
          city={city}
          onCityChange={newCity => setCity(newCity)}
          onCitySubmit={weatherApi}
        />
        {errorMessage ? <Error errorMessage={errorMessage} /> : null}
        {data ? (
          <>
            <Text style={styles.textStyle}>
              Weather forecast for: {data.city.name},{data.city.country}
            </Text>
            <Graph forecast={data} />
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'black'
  }
});

export default WeatherScreen;
