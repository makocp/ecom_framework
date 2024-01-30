import {Alert, Button, StyleSheet, View} from 'react-native'
import React, { useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native';
import { API_URL_PAYMENT_INTENT } from '../routes/Routes';

const CartScreen = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const createPaymentIntent = async () => {
    const response = await fetch(`${API_URL_PAYMENT_INTENT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // TODO: make amount
      body: JSON.stringify({ 'amount': 7995 })
    });
    if (!response.ok) {
      console.error('Failed to fetch param sheet');
    }
    const { clientSecret } = await response.json() as { clientSecret: string };
    if (!clientSecret) {
      console.error('Incomplete data received');
    }
    return clientSecret;
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!')
    }
  }

  const onCheckout = async () => {
    // 1. create payment intent
    const clientSecret = await createPaymentIntent();

    // 2. initialize payment sheet
    const { error } = await initPaymentSheet({
      merchantDisplayName: "ECOM GmbH",
      // customerId: customer,
      // customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: clientSecret,
      // allowsDelayedPaymentMethods: true
      // TODO: configure returnURL
      returnURL: 'stripe-example://stripe-redirect',
      // applePay: {
      //     merchantCountryCode: 'AUT',
      // },
      // googlePay: {
      //     merchantCountryCode: 'AT',
      //     testEnv: true,
      //     currencyCode: 'eur',
      // }
    });
    if (!error) {
      setLoading(true);
    } else {
      console.log(error);
    }

    // 3. present payment sheet
    await openPaymentSheet();
    setLoading(false);

    // 4. create order, if payment ok
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Button
        disabled={loading}
        title='Checkout'
        onPress={onCheckout}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default CartScreen