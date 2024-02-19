import {API_URL_PAYMENT_INTENT} from "../routes/Routes";
import {Alert} from "react-native";
import {initPaymentSheet, presentPaymentSheet} from "@stripe/stripe-react-native";

type useStripePaymentProps = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const useStripePayment = ({isLoading, setIsLoading} : useStripePaymentProps) => {
    const onCheckout = async (amount: number) => {
        if (amount === 0) {
            return Alert.alert("Please choose Products to Checkout!")
        }
        const clientSecret = await createPaymentIntent(amount);

        const {error} = await initPaymentSheet({
            merchantDisplayName: "ECOM GmbH",
            paymentIntentClientSecret: clientSecret,
            returnURL: 'stripe-example://stripe-redirect',
        });
        if (!error) {
            setIsLoading(true);
        } else {
            console.log(error);
        }

        await openPaymentSheet();
        setIsLoading(false);

        // todo: 4. create order, if payment ok
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

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!')
        }
    }


    return {onCheckout};
};

export default useStripePayment;