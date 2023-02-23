import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {
  haze,
  rainy,
  snow,
  sunny,
  clouds,
} from '../assets/backgroundImages/index';

export default function Details({ route }) {
  const weatherData = route.params.weatherData;
  const sky = route.params.weatherData.weather[0].main;
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    setBackgroundImage(getBackgroundImg(sky));
  }, [sky]);

  function getBackgroundImg(weather) {
    if (sky && sky === 'Snow') return snow;
    if (sky && sky === 'Clear') return sunny;
    if (sky && sky === 'Rain') return rainy;
    if (sky && sky === 'Haze') return haze;
    if (sky && sky === 'Clouds') return clouds;
    if (sky && sky === 'Mist') return rainy;
    return sunny;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <Text style={{fontSize: 40}}>Details</Text>
        <View style={styles.details}>
          <View style={(styles.place, styles.tile)}>
            <Text style={(styles.placeD, styles.smallText)}>Place</Text>
            <Text style={(styles.cityNameD, styles.largeText)}>{weatherData.name}</Text>
          </View>
          <View style={(styles.place, styles.tile)}>
            <Text style={(styles.tempD, styles.smallText)}>Temperature</Text>
            <Text style={(styles.tempD, styles.largeText)}>{weatherData.main?.temp}°C</Text>
          </View>
          <View style={styles.minMaxD}>
            <Text style={(styles.tempMaxD, styles.smallText)}>Temp Range</Text>
            <Text style={(styles.tempMaxD, styles.mediumText)}>
              H: {weatherData.main?.temp_max}°
            </Text>
            <Text style={(styles.tempMinD, styles.mediumText)}>
              L: {weatherData.main?.temp_min}°
            </Text>
          </View>
          <View style={styles.minMaxD}>
            <Text style={(styles.humidityD, styles.smallText)}>Humidity</Text>
            <Text style={(styles.humidityD, styles.largeText)}>
              {weatherData.main?.humidity} %
            </Text>
          </View>
          <View style={(styles.minMaxD, styles.tile)}>
            <Text style={(styles.pressureD, styles.smallText)}>Pressure</Text>
            <Text style={(styles.pressureD, styles.mediumText)}>
              {weatherData.main?.pressure} hPa
            </Text>
          </View>
          <View style={(styles.minMaxD, styles.tile)}>
            <Text style={(styles.windSpeed, styles.smallText)}>Wind Speed</Text>
            <Text style={(styles.windSpeed, styles.mediumText)}>
              {weatherData.wind?.speed} mph
            </Text>
          </View>
          <View style={styles.description}>
            <Text style={(styles.description, styles.smallText)}>
              Weather Description
            </Text>
            <Text style={(styles.description, styles.mediumText)}>{weatherData.weather[0].description}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  tile: {
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    height: 150,
    color: 'white',
    justifyContent: 'space-around',
  },
  place: {
    justifyContent: 'space-between',
  },
  smallText: {
    textAlign: 'right',
    fontSize: 18,
    color: 'white',
  },
  largeText: {
    textAlign: 'right',
    fontSize: 40,
    color: 'white',
  },
  mediumText: {
    textAlign: 'right',
    fontSize: 30,
    color: 'white',
  },
  minMaxD: {
    width: 150,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    height: 150,
    color: 'white',
    justifyContent: 'space-evenly',
  },
  description: {
    width: 335,
     backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    color: 'white',
    justifyContent: 'space-evenly',
    height: 100
  }
});
