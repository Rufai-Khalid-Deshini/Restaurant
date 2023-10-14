import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Top from '../components/Stores/Top'
import StoreCards from '../components/Stores/StoreCards'

export default function Stores() {
  return (
    <View>
      <Top />
      <StoreCards />
    </View>
  )
}

const styles = StyleSheet.create({})