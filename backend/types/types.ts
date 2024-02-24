export interface Product {
    id: string;
    title: string;
    category: string;
    price: number;
    description: string;
    image: number;
    shippingCost: number;
}

export interface Order {
    id: string;
    userId: number;
    cartProducts: CartProduct[];
    amountTotal: number;
    shippingAddress: string;
    isPaid: boolean;
    isDelivered: boolean
}

export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface CartProduct {
    id: string;
    product: Product;
    quantity: number;
}

export interface MockImage {
    image: number;
}