import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';

export default function Weather({temp, condition}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Icons name='weather-rainy' size={96} />
                <Text style={styles.temp}>{temp} °</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text>{condition}</Text>
            </View>
        </View>
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
        fontSize: 36
    }
});