import { StyleSheet, View,  Modal } from 'react-native'
import React from 'react'
import Top from '../components/Delivery/Top';
import Address from '../components/Delivery/Address';
import Store from '../components/Delivery/Store';
import Prodlists from '../components/Delivery/Prodlists';

export default function Delivery() {
  return (
    <View>
      <Modal animationType='fade'>
        <Top />
        <Address />
        <Store />
        <Prodlists />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({})