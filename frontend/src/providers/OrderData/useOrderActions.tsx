import {ICartProduct, IOrder, IPaymentData, IShippingData, IUser} from "../../types/types";
import {API_URL_CREATE_ORDER} from "../../routes/Routes";


type OrderProps = {
    cartProducts: ICartProduct[],
    user: IUser,
    shipping: IShippingData,
    payment: IPaymentData;
}
const useOrderActions = () => {

    const createOrder = async (props: OrderProps) => {
        const order = mapOrder(props);
        sendOrderToBackend(order);
    };

    const sendOrderToBackend = async (order: IOrder) => {
        try {
            const response = await fetch(`${API_URL_CREATE_ORDER}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order)
            });
            const data = await response.json();
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const createUid = (): string => {
        return Date.now().toString();
    };

    const mapOrder = (props: OrderProps): IOrder => {
        return {
            orderId: createUid(),
            user: props.user,
            products: props.cartProducts,
            shipping: props.shipping,
            payment: props.payment
        }
    };

    return {createOrder};

};

export default useOrderActions;