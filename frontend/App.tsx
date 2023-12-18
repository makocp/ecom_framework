import { NavigationContainer } from '@react-navigation/native';
import { Alert, Button, StyleSheet, View } from 'react-native';
import RootNavigator from './navigators/RootNavigator';
import { StripeProvider, usePaymentSheet } from '@stripe/stripe-react-native';
import { API_URL, PUBLISHABLE_KEY } from './constants/Constants';
import { useEffect, useState } from 'react';

const App = () => {
  const [ready, setReady] = useState(false);
  const { initPaymentSheet, presentPaymentSheet, loading } = usePaymentSheet();

  useEffect(() => {
    initialisePaymentSheet();
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

  return (
    <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
    >
      <View style={styles.container}>
        {/* <NavigationContainer>
          <RootNavigator />
        </NavigationContainer> */}

        <Button
          onPress={buy}
          title="Buy Now"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    </StripeProvider>
  );


  async function buy() {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
      setReady(false);
    }
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App;
