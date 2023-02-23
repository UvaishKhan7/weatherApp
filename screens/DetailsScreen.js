import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Details() {
  state = {
    names: [
      {
        id: 0,
        name: 'Delhi',
        time: '05:30pm',
        temp: '34°C',
        minMax: 'H:34°C L:17°C',
        clouds: 'Sunny',
      },
      {
        id: 1,
        name: 'Mumbai',
        time: '05:30pm',
        temp: '34°C',
        minMax: 'H:34°C L:17°C',
        clouds: 'Sunny',
      },
      {
        id: 2,
        name: 'Bangalore',
        time: '05:30pm',
        temp: '34°C',
        minMax: 'H:34°C L:17°C',
        clouds: 'Sunny',
      },
      {
        id: 3,
        name: 'Chennai',
        time: '05:30pm',
        temp: '34°C',
        minMax: 'H:34°C L:17°C',
        clouds: 'Sunny',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.forcast}>
        <Text style={styles.city}>Delhi</Text>
        <Text style={styles.temperature}>30°</Text>
        <Text style={styles.clouds}>Sunny</Text>
        <Text style={styles.minMax}>H:34° L:17°</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
