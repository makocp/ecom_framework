import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CartView = () => {

  const [backendData, setBackendData] = useState('');

  const fetchData = () => {
    fetch("http://localhost:4242/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }).catch(error => {
        console.error('Error fetching data:', error)
      });
  };


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
      <Button
        onPress={fetchData}
        title='test API'
        color="#841584"
        accessibilityLabel="Test the API!"
      />
      <Text>{backendData}</Text>
    </View>
  )
}

const handleOnPress = () => {
  // Alert.prompt("hello")
  Alert.alert("Here is the Stripe API, which should call the Payment Window!")
}

const styles = StyleSheet.create({})

export default CartView