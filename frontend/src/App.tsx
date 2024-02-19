import {StyleSheet} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import {API_URL_PUB_STRIPE_KEY} from './routes/Routes';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import {CartProvider} from "./providers/CartProvider";
import Toast from "react-native-toast-message";
import {toastConfig} from "./components/toasts/CustomToast";

const App = () => {
    const [pubStripeKey, setPubStripeKey] = useState('');

    // gets executed directly after start of App to fetch the publishable stripe api key.
    useEffect(() => {
        fetchPubStripeKey();
    }, [])

    // to fetch the publishable stripe api key from the backend.
    const fetchPubStripeKey = async () => {
        try {
            const response = await fetch(`${API_URL_PUB_STRIPE_KEY}`);
            const data = await response.text();
            setPubStripeKey(data);
        } catch (error) {
            console.error(error);
        }
    };

    // whole app is wrapped with StripeProvider, so it can be accessed from anywhere in the App.
    return (
        <StripeProvider
            publishableKey={pubStripeKey}
            // TODO: make merchantIdentifier for Apple Pay
            // merchantIdentifier=''
        >
            <CartProvider>
                <NavigationContainer>
                    <RootNavigator/>
                    <Toast config={toastConfig}/>
                </NavigationContainer>
            </CartProvider>
        </StripeProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
