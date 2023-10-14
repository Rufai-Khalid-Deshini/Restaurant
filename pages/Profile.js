import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '../components/Profile/Heading'
import GreetCard from '../components/Profile/GreetCard'
import Barcode from '../components/Profile/Barcode'
import Support from '../components/Profile/Support'
import Terms from '../components/Profile/Terms'

export default function Profile() {
  return (
    <View>
      <Heading />
      <GreetCard />
      <Barcode />
      <Support />
      <Terms />
    </View>
  )
}

const styles = StyleSheet.create({})