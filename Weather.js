import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Tornado: {
        iconName:'weather-hurricane',
        gradient: ['#5614B0', '#DBD65C']
    },
    Thunderstorm: {
        iconName:'weather-lightning-rainy',
        gradient: ['#5614B0', '#DBD65C']
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3']
    },
    Haze: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3']
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3']
    }, 
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#7F7FD5','#86A8E7','#91EAE4']

    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#7F7FD5','#86A8E7','#91EAE4']
    },
    Snow : {
        iconName: 'weather-snowy',
        gradient: ['#1c92d2','#f2fcfe']
    },
    Clear : {
        iconName: 'weather-sunny',
        gradient: ['#FF4E50','#F9D423']
    }, 
    Clouds: {
        iconName: 'cloud',
        gradient: ['#005AA7','#FFFDE4']
            },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8']
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8']
    },     
    Sand: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8']
    }, 
    Ash: {
        iconName: 'weather-fog',
        gradient: ['#606c88','#3f4c6b']
    },
    Squall: {
        iconName: 'weather-windy',
        gradient: ['#808080','#3fada8']
    }  
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <Icons name={weatherOptions[condition].iconName} size={96} color='white' />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>{condition}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Clear',
        'Clouds',
        'Mist',
        'Smoke',
        'Haze',
        'Dust',
        'Fog',
        'Sand',
        'Ash',
        'Squall',
        'Tornado'
    ]).isRequired
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    }
});