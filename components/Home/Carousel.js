import { StyleSheet, View, SafeAreaView, Image, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Dimensions from '../../config/Dimensions';
import OSes from '../../config/OSes';

const images = [
    'https://images.pexels.com/photos/7099900/pexels-photo-7099900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1191548/pexels-photo-1191548.jpeg?auto=compress&cs=tinysrgb&w=600'
]

export default function Carousel() {

    const [imgActive, setImgActive] = useState(0);

    onchange = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll = {({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {images.map((e, index) =>
                        <Image 
                            key = {e}
                            resizeMode = 'stretch'
                            style={styles.wrap}
                            source = {{uri: e}}
                        />
                    )}
                </ScrollView>
                <View style={styles.wrapdot}>
                    {images.map((e, index) => 
                        <Octicons name="dash" size={30} key={e} style = {imgActive == index ? styles.dotActive : styles.dot} />
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: OSes.android ? Dimensions.m_10 : 0
    },
    wrap: {
        width: Dimensions.WIDTH * 0.9,
        height: Dimensions.HEIGHT * 0.24,
        alignSelf: 'center',
        borderRadius: Dimensions.radius_medium,
        marginHorizontal: Dimensions.m_10
    },
    wrapdot: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black',
        fontWeight: '900'
    },
    dot: {
        margin: 3,
        color: '#fff',
        fontWeight: '900'
    }
})