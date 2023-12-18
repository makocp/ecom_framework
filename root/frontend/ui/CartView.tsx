import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartView = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >CartView</Text>
      <Button
      onPress={handleOnPress}
        title="Buy Now"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const handleOnPress = () => {
  // Alert.prompt("hello")
  Alert.alert("Here is the Stripe API, which should call the Payment Window!")
}

const styles = StyleSheet.create({})

export default CartView