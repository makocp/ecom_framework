
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
    product: IProduct;
    quantity: number;
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