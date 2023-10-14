import { StyleSheet, Text, View, Image, Alert, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import Colors from '../../config/Colors'
import Dimensions from '../../config/Dimensions'

export default function Card2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.h1}>Online reservation</Text>
        <Text style={styles.p}>Table booking</Text>
        <Pressable style={styles.rounded} onPress={() => Alert.alert("Note", "Coming soon")}>
          <Feather name="calendar" size={20} color={Colors.primary} />
          <Text style={styles.rtxt}>Reserve a table</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image style={{alignSelf: 'center', width: 100, height: 40}} source={require('../../assets/Home/Arc.png')} />
        <Pressable style={styles.rounded} onPress={() => Alert.alert("Note", "Coming soon")}>
            <Text style={styles.rtxt}>My reservations</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.cardbg,
        borderRadius: 10,
        height: Dimensions.HEIGHT * 0.2,
        width: Dimensions.WIDTH * 0.9,
        alignSelf: 'center',
        marginTop: 30
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    h1: {
        fontWeight: '500',
        fontSize: 16,
        color: Colors.black
    },
    p: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.grey
    },
    rounded: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 4,
        marginTop: Dimensions.m_20
    },
    rtxt: {
      color: Colors.primary,
      marginHorizontal: Dimensions.m_10
    }
})