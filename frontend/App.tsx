import { StyleSheet } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { API_URL_STRIPE_KEY as API_URL_PUB_STRIPE_KEY } from './constants/Routes';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  const [pubStripeKey, setPubStripeKey] = useState('');

  useEffect(() => {
    fetchPubStripeKey();
  }, [])

  const fetchPubStripeKey = async () => {
    try {
      const response = await fetch(`${API_URL_PUB_STRIPE_KEY}`);
      const data = await response.text();
      setPubStripeKey(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onCheckout = async () => {
    // Create Payment Intent

    // Initialize Payment Sheet

    // Present Payment Sheet

    // If Payment ok -> create order.
  };

  return (
    <StripeProvider
      publishableKey={pubStripeKey}
    >
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
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
