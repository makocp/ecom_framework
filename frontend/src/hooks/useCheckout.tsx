import useStripePayment from "./useStripePayment";
import {useCartActions} from "../providers/CartData/useCartActions";
import {CartProduct} from "../types/types";

const useCheckout = () => {
    const {removeFromCart, clearCart} = useCartActions();
    const {onCheckout, isLoading, setIsLoading} = useStripePayment();

    const onCheckoutCartAll = async (cartProducts: CartProduct[]) => {
        const amount = calcTotalPrice(cartProducts);
        const isSuccessPayment = await onCheckout(amount);
        if (isSuccessPayment) {
            clearCart();
            // create order
        }
    };

    const onCheckoutBuyNow = (cartProduct: CartProduct) => {
        // payment
        // create order product + quantity
    };

    const onCheckoutCartSingle = (cartProduct: CartProduct) => {
        // payment
        // remove from cart
        // create order
    };

    const createOrder = () => {

    };

    const initPayment = (amount: number) => {
        onCheckout(amount);
    }

    const calcTotalPrice = (cartProducts: CartProduct[]) => {
        const shipping = cartProducts.reduce((accumulated, current) => accumulated + current.product.shippingCost, 0);
        const subTotal = cartProducts.reduce((accumulated, current) => accumulated + current.product.price, 0);
        return shipping + subTotal;
    }

    return {onCheckoutCartAll, onCheckoutBuyNow, onCheckoutCartSingle};


};

export default useCheckout;