import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Tornado: {
        iconName:'weather-hurricane',
        gradient: ['#5614B0', '#DBD65C'],
        subtitle: '외부 활동을 삼가세요!'
    },
    Thunderstorm: {
        iconName:'weather-lightning-rainy',
        gradient: ['#5614B0', '#DBD65C'],
        subtitle: '외부 활동을 삼가세요!'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3'],
        subtitle: '시야가 잘 보이지 않을 수 있습니다. 운전 조심하세요!'
        
    },
    Haze: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3'],
        subtitle: '시야가 잘 보이지 않을 수 있습니다. 운전 조심하세요!'
    },
    Fog: {
        iconName: 'weather-fog',
        gradient: ['#8e9eab','#eef2f3'],
        subtitle: '시야가 잘 보이지 않을 수 있습니다. 운전 조심하세요!'
    }, 
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#7F7FD5','#86A8E7','#91EAE4'],
        subtitle: '우산 잊지 마세요!'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#7F7FD5','#86A8E7','#91EAE4'],
        subtitle: '우산 잊지 마세요!'
    },
    Snow : {
        iconName: 'weather-snowy',
        gradient: ['#1c92d2','#f2fcfe'],
        subtitle: '우산 잊지 마세요!'
    },
    Clear : {
        iconName: 'weather-sunny',
        gradient: ['#FF4E50','#F9D423'],
        subtitle: '햇빛이 눈부셔요~'
    }, 
    Clouds: {
        iconName: 'cloud',
        gradient: ['#283E51','#4B79A1'],
        subtitle: '우중충하지만 오늘도 화이팅!'
        
            },
    Smoke: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8'],
        subtitle: '외부 활동을 삼가세요!'
    },
    Dust: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8'],
        subtitle: '외부 활동을 삼가세요!'
    },     
    Sand: {
        iconName: 'weather-fog',
        gradient: ['#6D6027','#D3CBB8'],
        subtitle: '외부 활동을 삼가세요!'
    }, 
    Ash: {
        iconName: 'weather-fog',
        gradient: ['#606c88','#3f4c6b'],
        subtitle: '외부 활동을 삼가세요!'
    },
    Squall: {
        iconName: 'weather-windy',
        gradient: ['#808080','#3fada8'],
        subtitle: '바람이 굉장히 셉니다. 조심하세요!'
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    title: {
        color: 'white',
        fontSize: 45,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        color: 'white',
        fontSize: 22
    },
    textContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 30
    }
});