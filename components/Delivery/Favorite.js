import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Dimensions from '../../config/Dimensions'

export default function Favorite() {
  return (
    <ScrollView style={{height: 500}}>
        <Text style={styles.txt1}>Favorite</Text>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/_module/image.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Pure black</Text>
                <Text style={styles.price}>US$59.00</Text>
            </View>
        </View>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/module/image-1.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Capuccino</Text>
                <Text style={styles.price}>US$60.49</Text>
            </View>
        </View>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/module/image-2.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Arabica 1kg</Text>
                <Text style={styles.price}>US$59.70</Text>
            </View>
        </View>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/module/image-3.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Hawaiian Pizza</Text>
                <Text style={styles.price}>US$89.23</Text>
            </View>
        </View>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/module/image-4.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Smoky Burger</Text>
                <Text style={styles.price}>US$76.09</Text>
            </View>
        </View>
        <View style={styles.cards}>
            <Image source={require('../../assets/Favorite/module/image-5.png')} style={{marginRight: Dimensions.m_20}} />
            <View>
                <Text style={styles.name}>Robusta 1kg</Text>
                <Text style={styles.price}>US$62.440</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    txt: {
        fontWeight: '500',
        padding: Dimensions.m_10
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: Dimensions.m_10
    },
    name: {
        fontSize: Dimensions.txt_small,
        fontWeight: '400'
    },
    price: {
        fontWeight: '700'
    }
})