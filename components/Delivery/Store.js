import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Dimensions from '../../config/Dimensions';
import Colors from '../../config/Colors';

export default function Store() {
    return (
        <Pressable style={styles.store}>
            <Text>Store</Text>
            <Text style={{color: '#eee'}}>|</Text>
            <Text>Name of store will be placed here</Text>
            <Ionicons name='chevron-down' size={24} color={Colors.black} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    store: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Dimensions.m_10,
        marginVertical: Dimensions.m_30,
        marginHorizontal: Dimensions.m_10,
        borderColor: '#ddd',
        borderWidth: 1
    }
})