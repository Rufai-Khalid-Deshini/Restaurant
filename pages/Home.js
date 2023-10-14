import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Carousel from '../components/Home/Carousel'
import Header from '../components/Home/Header'
import Card1 from '../components/Home/Card1'
import Card2 from '../components/Home/Card2'
import Colors from '../config/Colors'
import Products from '../components/Home/Products'

export default function Home() {
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <StatusBar />
        <Header />
        <Carousel />
        <Card1 />
        <Card2 />
        <Products />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.homebg
    }
})