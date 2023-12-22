import { View, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { API_URL_PAYMENT_SHEET as API_URL_PAYMENT_INTENT } from '../constants/Routes'
import { useStripe } from '@stripe/stripe-react-native'

const MainView = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    const createPaymentIntent = async () => {
        const response = await fetch(`${API_URL_PAYMENT_INTENT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // TODO: make amount
            body: JSON.stringify({ 'amount': 19995 })
        });
        if (!response.ok) {
            console.error('Failed to fetch param sheet');
        }
        const { clientSecret } = await response.json();
        if (!clientSecret) {
            console.error('Incomplete data received');
        }
        return clientSecret;
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();
        
        if ( error ) {
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
            paymentIntentClientSecret: clientSecret
        });
        if (!error) {
            setLoading(true);
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

export default MainView