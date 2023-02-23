import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';

export default function Details() {

    const API_KEY = 'dc2d1e8d5d33a0a076babd1b3c5ecad6';

    const [cityName, setCityName] = useState("");
    const [weatherData, setWeatherData] = useState();

    const navigation = useNavigation();

    async function fetchWeatherData(cityName) {
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const response = await fetch(API);
            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.searchResult}>
            <View style={styles.searchResultLeft}>
                <View style={styles.upperLeft}>
                    <Text style={styles.city}>{weatherData.name}</Text>
                    <Text style={styles.clouds}>{weatherData.weather[0].main}</Text>
                </View>
                <Text style={styles.humidity}>Humidity: {weatherData.main.humidity}%</Text>
            </View>
            <TouchableOpacity style={styles.favIcon} onPress={() => navigation.navigate('Details')} >
                <EvilIcons name="exclamation" size={40} color="green" />
                <Text style={styles.fav}>Details</Text>
            </TouchableOpacity>
            <View style={styles.searchResultRight}>
                <Text style={styles.temp}>{weatherData.main.temp}°</Text>
                <View style={styles.minMax}>
                    <Text style={styles.max}>H: {weatherData.main.temp_max}°</Text>
                    <Text style={styles.min}>{weatherData.main.temp_min}°</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchResult: {
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 140
    },
    searchResultLeft: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    favIcon: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchResultRight: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'right'
    },
    city: {
        fontSize: 30,
    },
    clouds: {
        fontSize: 18
    },
    humidity: {
        fontSize: 18
    },
    temp: {
        textAlign: 'right',
        fontSize: 50,
        fontWeight: '300'
    },
    minMax: {
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'space-between'
    },
    min: {
        fontSize: 18
    },
    max: {
        fontSize: 18
    },
    fav: {
        fontSize: 18,
        marginTop: 5
    }
})