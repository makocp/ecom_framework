import { Alert, Button, StyleSheet, View } from 'react-native';
import { StripeProvider, usePaymentSheet } from '@stripe/stripe-react-native';
import { API_URL, API_URL_STRIPE_KEY } from './constants/Constants';
import { useEffect, useState } from 'react';

const App = () => {
  const [ready, setReady] = useState(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();
  const [publishableKey, setPublishableKey] = useState('');

  useEffect(() => {
    initialisePaymentSheet();
  }, [])

  useEffect(() => {
    fetchPublishableKey();
  }, [])

  const initialisePaymentSheet = async () => {
    // All three get generated on server side, for security reasons.
    const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      merchantDisplayName: 'Mako CP GmbH',
      allowsDelayedPaymentMethods: true,
      returnURL: 'stripe-example://stripe-redirect',
      // applePay: {
      //   merchantCountryCode: 'AT',
      // },
      // googlePay: {
      //   merchantCountryCode: 'AT',
      //   testEnv: true,
      //   currencyCode: 'eur'
      // },

    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      setReady(true);
    }
  };

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };

  };

  async function buy() {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
      setReady(false);
    }
  };

  const fetchPublishableKey = async () => {
    try {
      const response = await fetch(`${API_URL_STRIPE_KEY}`);
      const data = await response.text();
      setPublishableKey(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StripeProvider
      publishableKey={publishableKey}
    >
      {/* <NavigationContainer>
          <RootNavigator />
        </NavigationContainer> */}

      <View style={styles.container}>
        <Button
          onPress={buy}
          title="Buy Now"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/* <CartView></CartView> */}
      </View>
    </StripeProvider>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
