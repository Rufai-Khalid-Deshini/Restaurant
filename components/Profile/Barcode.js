import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Dimensions from '../../config/Dimensions'

export default function Barcode() {
    return (
        <View style={styles.con}>
            <Image source={require('../../assets/Favorite/barcode-1.png')} style={styles.img} />
            <Text style={styles.txt}>38740-94839-32083</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: Dimensions.WIDTH * 0.9,
        height: Dimensions.HEIGHT * 0.13
    },
    con: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: Dimensions.m_30
    },
    txt: {
        marginTop: Dimensions.m_10
    }
})