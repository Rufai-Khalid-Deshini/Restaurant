import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Dimensions from '../../config/Dimensions'
import Colors from '../../config/Colors'
import Favorite from './Favorite'

export default function Prodlists() {
    return (
        <View style={styles.container}>
            <View>
                <Pressable style={styles.list}>
                    <Text style={styles.txt1}>Favorite</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Coffee</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Milk Tea</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Tea</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Bakery</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Pizza</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Snacks</Text>
                </Pressable>
                <Pressable style={styles.list}>
                    <Text style={styles.txt}>Burger</Text>
                </Pressable>
            </View>
            <Favorite />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    list: {
        padding: Dimensions.m_10,
        backgroundColor: Colors.homebg,
        paddingHorizontal: Dimensions.m_30,
        borderWidth: 1,
        borderColor: '#EEEEEE'
    },
    txt: {
        color: Colors.grey,
        fontSize: Dimensions.txt_small,
        fontWeight: '400'
    },
    txt1: {
        color: Colors.primary,
        fontSize: Dimensions.txt_small,
        fontWeight: '400'
    }
})