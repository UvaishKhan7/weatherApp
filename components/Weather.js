import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny } from '../assets/backgroundImages/index';

export default function Weather({ main, weather, cityName }) {

    const [backgroundImage, setBackgroundImage] = useState(null)

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(weather));
    }, [weather])

    function getBackgroundImg(weather) {
        if(weather && weather === 'Snow') return snow
        if(weather && weather === 'Clear') return sunny
        if(weather && weather === 'Rain') return rainy
        if(weather && weather === 'Haze') return haze
        return haze;   
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundImage}
                resizeMode='cover'
                style={styles.backgroundImg}
            >
                <Text style={styles.cityName}>{cityName ? cityName : ''}</Text>
                <Text style={styles.temp}>{main ? main.temp : ''}°</Text>
                <Text style={styles.weather}>{weather ? weather : ''}</Text>
                <View style={styles.minMax}>
                    <Text style={styles.tempMax}>H: {main ? main.temp_max : ''}°</Text>
                    <Text style={styles.tempMin}>L: {main ? main.temp_min : ''}°</Text>
                </View>
                <SearchBar />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center'
    },
    cityName: {
        fontSize: 35,
        marginTop: 80,
        fontWeight: '300'
    },
    temp: {
        marginVertical: 10,
        fontSize: 65,
        fontWeight: '200',
    },
    weather: {
        fontSize: 22,
        marginBottom: 10
    },
    minMax: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        gap: '2rem',
        justifyContent: 'space-evenly',
    },
    tempMax: {
        fontSize: 22,
    },
    tempMin: {
        fontSize: 22,
    }
})