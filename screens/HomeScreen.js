import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Weather from '../components/Weather';

export default function Home({current, timezone, weather}) {

    return (
        <View style={styles.container}>
            <Weather current={current} timezone={timezone} weather={weather} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        margin: 20,
        fontSize: 28
    }
});
