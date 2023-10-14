import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../../config/Colors';
import { useNavigation } from '@react-navigation/native';
import Dimensions from '../../config/Dimensions';

export default function Top({ Delivery }) {
    const { navigate } = useNavigation();
    return (
        <View style={styles.head}>
            <View style={styles.Left}>
                <Pressable onPress={() => {navigate('Homes', {Delivery})}}>
                    <Ionicons name='chevron-back' size={24} color={Colors.black} />
                </Pressable>
                <Text style={styles.txt}>Delivery</Text>
            </View>

            <View style={styles.Right}>
                <Ionicons name='search' color={Colors.black} size={24} />
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
        marginBottom: Dimensions.m_20
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