import {ICartProduct, IOrder} from "../types/types";

export const createOrder = (cartProducts: ICartProduct[]): IOrder => {
    return
};


const calculateSubtotal = () => {

};

const calculateShipping = () => {

};

const calculateTotal = () => {

};

function mapCartProductsToOrderStructure(cartProducts: ICartProduct[], orderId: string) {
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