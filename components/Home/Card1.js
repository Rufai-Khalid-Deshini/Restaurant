import { StyleSheet, Text, View, Alert, Pressable, Image } from 'react-native'
import React from 'react'
import Dimensions from '../../config/Dimensions'
import Colors from '../../config/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Card1({ card1 }) {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.cards} onPress={() => Alert.alert("Note", "Coming soon")}>
        <Image source={require('../../assets/Home/Image.png')} />
        <Text style={styles.head}>Store pickup</Text>
        <Text style={styles.body}>Best quality</Text>
      </Pressable>
      <Pressable style={styles.cards} onPress={() => {navigate('Delivery'), {card1}}}>
        <Image source={require('../../assets/Home/Image-1.png')} />
        <Text style={styles.head}>Delivery</Text>
        <Text style={styles.body}>Always on time</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: Dimensions.m_30,
        backgroundColor: Colors.cardbg,
        width: Dimensions.WIDTH * 0.9,
        alignSelf: 'center',
        borderRadius: Dimensions.radius_small,
        height: Dimensions.HEIGHT * 0.2
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    head: {
        fontSize: Dimensions.txt_medium,
        fontWeight: '500'
    },
    body: {
        fontSize: Dimensions.txt_x_small,
        fontWeight: '400'
    }
})