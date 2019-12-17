import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WeatherScreen from './src/screens/WeatherScreen';

const navigator = createStackNavigator(
  {
    Weather: WeatherScreen
  },
  {
    initialRouteName: 'Weather',
    defaultNavigationOptions: {
      title: 'Weather App'
    }
  }
);

export default createAppContainer(navigator);
