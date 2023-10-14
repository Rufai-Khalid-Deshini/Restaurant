import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';
import { ScrollView } from 'react-native';

export default function StoreCards() {
    return (
        <ScrollView style={{height: 550}}>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB China mall</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB China town mall</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB Leman</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB Ibis</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB Golden Mansion</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
            <View style={styles.card}>
                <FontAwesome5 name="store" size={24} color={Colors.grey} />
                <View>
                    <Text style={styles.name}>SB CMT8</Text>
                    <Text style={styles.add}>11 SU Van Hanh, D10 HCM City</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.cardbg,
        width: Dimensions.WIDTH * 0.9,
        alignSelf: 'center',
        padding: Dimensions.m_20,
        borderRadius: 8,
        marginVertical: Dimensions.m_10,
        display: 'flex',
        flexDirection: 'row'
    },
    name: {
        fontSize: Dimensions.txt_large,
        fontWeight: '600',
        marginLeft: Dimensions.m_10
    },
    add: {
        color: Colors.grey,
        marginLeft: Dimensions.m_10
    }
})