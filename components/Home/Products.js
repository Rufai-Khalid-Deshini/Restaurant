import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import Dimensions from '../../config/Dimensions'

export default function Products() {
    return (
        <View>
            <Text style={styles.h1}>Promotion campaign</Text>
            <View style={styles.prods}>
                <Pressable onPress={() => Alert.alert("Note", "Coming soon")} style={styles.cards}>
                    <Image source={require('../../assets/Home/Image-3.png')} />
                    <Text style={styles.h2}>Discount all Excelsa</Text>
                    <Text style={styles.h2}>20% in all stores</Text>
                    <Text style={styles.p}>2023/10/23 - 2024/01//01</Text>
                </Pressable>
                <Pressable onPress={() => Alert.alert("Note", "Coming soon")} style={styles.cards}>
                    <Image source={require('../../assets/Home/Image-4.png')} />
                    <Text style={styles.h2}>Discount all Liberica</Text>
                    <Text style={styles.h2}>20% in all stores</Text>
                    <Text style={styles.p}>2023/10/23 - 2024/01//01</Text>
                </Pressable>
                <Pressable onPress={() => Alert.alert("Note", "Coming soon")} style={styles.cards}>
                    <Image source={require('../../assets/Home/Image-3.png')} />
                    <Text style={styles.h2}>Discount all Excelsa</Text>
                    <Text style={styles.h2}>20% in all stores</Text>
                    <Text style={styles.p}>2023/10/23 - 2024/01//01</Text>
                </Pressable>
                <Pressable onPress={() => Alert.alert("Note", "Coming soon")} style={styles.cards}>
                    <Image source={require('../../assets/Home/Image-4.png')} />
                    <Text style={styles.h2}>Discount all Liberica</Text>
                    <Text style={styles.h2}>20% in all stores</Text>
                    <Text style={styles.p}>2023/10/23 - 2024/01//01</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: Dimensions.txt_medium,
        fontWeight: '700',
        margin: Dimensions.m_20,
        marginTop: Dimensions.m_30
    },
    h2: {
        fontWeight: '500',
        fontSize: Dimensions.txt_small
    },
    prods: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    p: {
        fontSize: Dimensions.txt_xx_small,
        fontWeight: '400'
    },
    cards: {
        marginBottom: Dimensions.m_20
    }
})