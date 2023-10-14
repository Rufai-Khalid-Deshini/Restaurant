import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons'
import Dimensions from '../../config/Dimensions'
import Colors from '../../config/Colors'

export default function Heading() {
  return (
    <View style={styles.head}>
        <View style={styles.Left}>
            <Text style={styles.txt}>Rufai Khalid Deshini</Text>
        </View>

        <View style={styles.Right}>
            <View style={styles.R}>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
                <Text style={{fontSize: 24}}>|</Text>
                <AntDesign name="closecircleo" size={24} color="black" />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: Dimensions.m_20,
        padding: Dimensions.m_20,
        backgroundColor: Colors.cardbg
    },
    Left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt: {
      fontSize: Dimensions.txt_large,
      fontWeight: '700',
      color: Colors.black
    },
    Right: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    R: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: Dimensions.WIDTH * 0.25,
      backgroundColor: '#eeeeee',
      borderRadius: 50,
      marginLeft: Dimensions.m_10
  },
})