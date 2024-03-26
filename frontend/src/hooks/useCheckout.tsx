import useStripePayment from "./useStripePayment";
import {useCartActions} from "../providers/CartData/useCartActions";
import {ICartProduct} from "../types/types";
import useOrderActions from "../providers/OrderData/useOrderActions";
import {mockPayment, mockShipping, mockUsers} from "../data/mockData";

const useCheckout = () => {
    const {removeFromCart, clearCart} = useCartActions();
    const {onCheckout, isLoading, setIsLoading} = useStripePayment();
    const {createOrder} = useOrderActions();

    const onCheckoutCartAll = async (cartProducts: ICartProduct[]) => {
        const amount = calcTotalPrice(cartProducts);
        const isSuccessPayment = await onCheckout(amount);
        if (isSuccessPayment) {
            clearCart();
            // todo: implement dynamically
            createOrder({cartProducts: cartProducts, user: mockUsers[0], shipping: mockShipping, payment: mockPayment});
        }
    };

    const onCheckoutBuyNow = async (cartProduct: ICartProduct) => {
        const amount = calcTotalPrice([cartProduct]);
        const isSuccessPayment = await onCheckout(amount);
        if (isSuccessPayment) {
            // todo: implement dynamically
            createOrder({cartProducts: [cartProduct], user: mockUsers[0], shipping: mockShipping, payment: mockPayment});
        }
    };

    const onCheckoutCartSingle = async (cartProduct: ICartProduct) => {
        const amount = calcTotalPrice([cartProduct]);
        const isSuccessPayment = await onCheckout(amount);
        if (isSuccessPayment) {
            removeFromCart(cartProduct.cartProductId);
            // todo: implement dynamically
            createOrder({cartProducts: [cartProduct], user: mockUsers[0], shipping: mockShipping, payment: mockPayment});
        }
    };

    const calcTotalPrice = (cartProducts: ICartProduct[]) => {
        const shipping = cartProducts.reduce((accumulated, current) => accumulated + current.product.shippingCost, 0);
        const subTotal = cartProducts.reduce((accumulated, current) => accumulated + current.product.price * current.quantity, 0);
        return shipping + subTotal;
    }

    return {onCheckoutCartAll, onCheckoutBuyNow, onCheckoutCartSingle};


};

export default useCheckout;