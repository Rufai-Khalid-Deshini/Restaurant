import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../config/Colors'
import Dimensions from '../../config/Dimensions'

export default function GreetCard() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Hello</Text>
                <Text style={styles.txt1}>Rufai Khalid Deshini</Text>
            </View>
            <View style={styles.btm}>
                <Text style={styles.txt}>Join Date: 13/10/2023</Text>
                <Text style={styles.txt1}>500 points</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        width: Dimensions.WIDTH * 0.9,
        height: Dimensions.HEIGHT * 0.23,
        alignSelf: 'center',
        borderRadius: Dimensions.radius_medium,
        padding: Dimensions.m_20,
        justifyContent: 'space-between'
    },
    txt: {
        color: '#EEEEEE',
        fontWeight: '600'
    },
    txt1: {
        fontSize: Dimensions.txt_large,
        fontWeight: '800',
        color: '#EEEEEE'
    },
    btm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})