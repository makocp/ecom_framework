import {API_URL_PAYMENT_INTENT} from "../routes/Routes";
import {Alert} from "react-native";
import {initPaymentSheet, presentPaymentSheet} from "@stripe/stripe-react-native";
import {useState} from "react";

const useStripePayment = () => {
    const [isLoading, setIsLoading] = useState(false);
    const onCheckout = async (amount: number): Promise<boolean> => {
        let isSuccess = false;

        if (amount === 0) {
            Alert.alert("Please choose Products to Checkout!")
            return isSuccess;
        }

        const clientSecret = await createPaymentIntent(amount);
        const {error} = await initPaymentSheet({
            merchantDisplayName: "ECOM GmbH",
            paymentIntentClientSecret: clientSecret,
            returnURL: 'stripe-example://stripe-redirect',
        });
        if (!error) {
            setIsLoading(true);
        }

        const errorOpen = await openPaymentSheet();
        if (errorOpen) {
            Alert.alert(`${errorOpen.code}`, errorOpen.message);
        } else {
            isSuccess = true;
            Alert.alert('Success', 'Your order is confirmed!');
        }

        setIsLoading(false);
        return isSuccess;
    };

    const createPaymentIntent = async (amount: number) => {

        const response = await fetch(`${API_URL_PAYMENT_INTENT}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'amount': amount})
        });
        if (!response.ok) {
            console.error('Failed to fetch param sheet');
        }
        const {clientSecret} = await response.json() as { clientSecret: string };
        if (!clientSecret) {
            console.error('Incomplete data received');
        }
        return clientSecret;
    };

    const openPaymentSheet = async () => {
        const {error} = await presentPaymentSheet();
        return error;
    }


    return {onCheckout, isLoading, setIsLoading};
};

export default useStripePayment;