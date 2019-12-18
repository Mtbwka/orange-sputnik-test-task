import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';
import convert from '../util/converter';

const Graph = ({ forecast }) => {
  const { labels, data } = convert(forecast);

  return (
    <StackedBarChart
      data={{
        labels,
        legend: ['Night', 'Day'],
        data,
        barColors: ['#071c73', '#e38a07']
      }}
      width={Dimensions.get('window').width - 30} // from react-native
      height={300}
      chartConfig={{
        backgroundColor: '#00e2c4',
        backgroundGradientFrom: '#8191d6',
        backgroundGradientTo: '#031563',
        decimalPlaces: 0,
        color: (opacity = 0) => `rgba(0, 0, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
      }}
      style={{
        marginVertical: 10
      }}
    />
  );
};

export default Graph;
