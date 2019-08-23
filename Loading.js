import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
    return(  
        <LinearGradient style={styles.container} colors={['#ffb347','#ffcc33']}>   
            <StatusBar barStyle='light-content' />    
            <Text style={styles.text}>Getting the weather</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    text: {
        color: '#444f59',
        fontSize: 33
    }
});