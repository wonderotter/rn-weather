import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from 'ansi-colors';

export default function Loading() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#444f59',
        fontSize: 30
    }
});