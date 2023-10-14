import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';

export default function Address() {
    return (
        <Pressable style={styles.del} onPress={() => Alert.alert('Note', 'Coming Soon!')}>
            <View>
                <Image source={require('../../assets/Home/Image-1.png')} style={{width: 70, height: 40}} />
            </View>
            <View>
                <Text style={styles.txt1}>Deliver to</Text>
                <Text style={styles.txt2}>285 CM28, D.10, HCM City</Text>
                <Text style={styles.txt3}>Nick - 0893849234</Text>
            </View>
            <Ionicons name='chevron-forward' size={24} color={Colors.black} style={{marginLeft: 95}} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    del: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Dimensions.m_30
      },
      txt1: {
        fontWeight: '400',
        fontSize: Dimensions.txt_small
      },
      txt2: {
        fontWeight: '700',
        fontSize: Dimensions.txt_small
      },
      txt3: {
        fontSize: Dimensions.txt_x_small,
        fontWeight: '400'
      },
})