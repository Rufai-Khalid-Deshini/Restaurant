import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '../../config/Colors'
import Dimensions from '../../config/Dimensions';

export default function Support() {
    return (
        <View style={styles.con}>
            <View style={styles.sup}>
                <FontAwesome5 name="headset" size={24} color={Colors.primary} />
                <View style={{marginLeft: Dimensions.m_20}}>
                    <Text style={styles.txt}>Support</Text>
                    <Text>Call or chat with us</Text>
                </View>
            </View>
            <Ionicons name='chevron-forward' color={Colors.grey} size={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Dimensions.m_20,
        backgroundColor: '#EEEEEE',
        width: Dimensions.WIDTH * 0.9,
        alignSelf: 'center',
        borderRadius: Dimensions.radius_medium,
        alignItems: 'center'
    },
    sup: {
        display: 'flex',
        flexDirection: 'row'
    },
    txt: {
        fontSize: Dimensions.txt_medium,
        fontWeight: '700'
    }
})