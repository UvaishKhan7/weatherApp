import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Weather from './components/Weather';
import Details from './components/Details.js';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const API_KEY = 'dc2d1e8d5d33a0a076babd1b3c5ecad6';

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchWeatherData("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchWeatherData = (latitude, longitude) => {
    if (latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home">{props => <Weather main={data.main} weather={data.weather && data.weather[0].main} cityName={data.name} />}</Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
