import {IShopifyProduct} from "../providers/ProductData/ShopifyProvider";

export interface IOrder {
    orderId: string;
    user: IUser;
    products: ICartProduct[];
    shipping: IShippingData;
    payment: IPaymentData;
}

export interface IUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    telNr?: string;
}

export interface ILoginProps {
    email: string;
    password: string;
}

export interface IUserData {
    currentUser: IUser;
    token: string;
}


export interface ICartProduct {
    cartProductId: string;
    product: IShopifyProduct;
    quantity: number;
}

export interface IShopifyOrder {
    line_items: IShopifyLineItem[];
    email: string;
    customer: IShopifyCustomer;
    billing_address: IShopifyAddress;
    shipping_address: IShopifyAddress;
    financial_status: string;
    transactions: IShopifyTransaction[];
}

export interface IShopifyLineItem {
    variant_id: number;
    quantity: number;
}

export interface IShopifyCustomer {
    first_name: string;
    last_name: string;
    email: string;
}

export interface IShopifyAddress {
    first_name: string;
    last_name: string;
    address1: string;
    phone: string;
    city: string;
    province: string;
    country: string;
    zip: string;
}

export interface IShopifyTransaction {
    test: boolean;
    kind: string;
    status: string;
    amount: number;
}

export interface IProduct {
    productId: string;
    title: string;
    category: string;
    price: number;
    description: string;
    image: number;
    shippingCost: number;
}

export interface IShippingData {
    shippingId: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zipCode: number;
    country: string;
    comment: string;
    isDelivered: boolean;
    isPaid: boolean;
}

export interface IPaymentData {
    paymentId: string;
    amountTotal: number;
    isPaid: boolean;
}

export interface IMockImage {
    image: number;
}