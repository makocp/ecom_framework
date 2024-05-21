import useStripePayment from "./useStripePayment";
import {useCartActions} from "../providers/CartData/useCartActions";
import {ICartProduct} from "../types/types";
import useOrderActions from "../providers/OrderData/useOrderActions";
import {mockPayment, mockShipping, mockUsers} from "../data/mockData";
import {useShopifyData} from "../providers/ProductData/ShopifyProvider";

const useCheckout = () => {
    const {removeFromCart, clearCart} = useCartActions();
    const {onCheckout, isLoading, setIsLoading} = useStripePayment();
    const {createOrder} = useOrderActions();
    const {placeOrder, getTransaction, processTransaction} = useShopifyData();

    /**
     * todo: simplify methods to one
     * todo: add debounce (?) to not be able to click multiple times
     * todo: oursource processing logic to backend
     */
    const onCheckoutCartAll = async (cartProducts: ICartProduct[]) => {
        const amount = calcTotalPrice(cartProducts);

        const orderData = await placeOrder(cartProducts, amount);
        const orderId = orderData.order.id;

        const isSuccessPayment = await onCheckout(amount);
        if (isSuccessPayment) {
            const transactionData = await getTransaction(orderId);
            const transactionId = transactionData.transactions[0].id;
            await processTransaction(orderId, transactionId, amount);
            clearCart();
        }

        //// for mockdata:
        // if (isSuccessPayment) {
        //     clearCart();
        //     // todo: implement dynamically
        //     createOrder({cartProducts: cartProducts, user: mockUsers[0], shipping: mockShipping, payment: mockPayment});
        // }
    };

    const onCheckoutBuyNow = async (cartProduct: ICartProduct) => {
        const amount = calcTotalPrice([cartProduct]);
        await placeOrder([cartProduct], amount);

        const isSuccessPayment = await onCheckout(amount);


        // if (isSuccessPayment) {
        //     // todo: implement dynamically
        //     createOrder({
        //         cartProducts: [cartProduct],
        //         user: mockUsers[0],
        //         shipping: mockShipping,
        //         payment: mockPayment
        //     });
        // }
    };

    const onCheckoutCartSingle = async (cartProduct: ICartProduct) => {
        const amount = calcTotalPrice([cartProduct]);
        await placeOrder([cartProduct], amount);



        // const isSuccessPayment = await onCheckout(amount);
        // if (isSuccessPayment) {
        //     removeFromCart(cartProduct.cartProductId);
        //     // todo: implement dynamically
        //     createOrder({
        //         cartProducts: [cartProduct],
        //         user: mockUsers[0],
        //         shipping: mockShipping,
        //         payment: mockPayment
        //     });
        // }
    };

    const calcTotalPrice = (cartProducts: ICartProduct[]) => {
        // const shipping = cartProducts.reduce((accumulated, current) => accumulated + current.product.shippingCost, 0);
        const subTotal = cartProducts.reduce((accumulated, current) => accumulated + current.product.price * current.quantity, 0);
        // return shipping + subTotal;
        return subTotal;
    }

    return {onCheckoutCartAll, onCheckoutBuyNow, onCheckoutCartSingle};


};

export default useCheckout;