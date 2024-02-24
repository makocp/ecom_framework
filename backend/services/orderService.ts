import {CartProduct, Order} from "../types/types";

export const createOrder = (cartProducts: CartProduct[]): Order => {
    return
};


const calculateSubtotal = () => {

};

const calculateShipping = () => {

};

const calculateTotal = () => {

};

function mapCartProductsToOrderStructure(cartProducts: CartProduct[], orderId: string) {
    return {
        id: orderId,
        userId: 12, // Example, you need to get this from somewhere
        products: cartProducts, // Assuming CartProduct and Product are compatible
        amountTotal: 89990,
        shippingAddress: 'Some address', // Get this from the user
        isPaid: true,
        isDelivered: false,
    };
}