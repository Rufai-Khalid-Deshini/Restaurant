import { StyleSheet, Text, SafeAreaView, Image, View } from 'react-native'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import Colors from '../../config/Colors'
import Dimensions from '../../config/Dimensions';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.L}>
            <View>
                <Image source={require('../../assets/favicon.png')} style={styles.logo} />
            </View>
            <View>
                <Text style={styles.welcome}>Welcome to</Text>
                <Text style={styles.name}>Sample restaurant</Text>
            </View>
        </View>

        <View style={styles.R}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
            <Text style={{fontSize: 24}}>|</Text>
            <AntDesign name="closecircleo" size={24} color="black" />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 30
    },
    L: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.WIDTH * 0.5
    },
    R: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: Dimensions.WIDTH * 0.25,
        backgroundColor: '#eeeeee',
        borderRadius: 50

    },
    logo: {
        width: 40,
        height: 40
    },
    welcome: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.black
    },
    name: {
        fontWeight: '700',
        fontSize: 14,
        color: Colors.black
    }
})