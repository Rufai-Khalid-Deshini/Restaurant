import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dimensions from '../../config/Dimensions'
import Colors from '../../config/Colors'

export default function Terms() {
  return (
    <View  style={styles.con}>
      <Text style={styles.txt}>Terms and Conditions</Text>
      <Text style={styles.txt1}>version: 1.0.0</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    con: {
        alignSelf: 'center',
        height: Dimensions.HEIGHT * 0.12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: 80
    },
    txt: {
        color: Colors.primary,
        textDecorationColor: Colors.primary,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
        fontWeight: '700'
    },
    txt1: {
        textAlign: 'center',
        color: Colors.grey
    }
})