import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {ICartProduct, IShopifyOrder} from "../../types/types";

export interface IShopifyProduct {
    productId: number;
    title: string;
    category?: string;
    price: number;
    description: string;
    image: string;
}

interface IShopifyContextType {
    products: IShopifyProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IShopifyProduct[]>>;
    placeOrder: (cartProducts: ICartProduct[], amount: number) => Promise<any>;
    processTransaction: () => Promise<any>;
}

const ShopifyContext: React.Context<IShopifyContextType | undefined> = createContext<IShopifyContextType | undefined>(undefined);

export const ShopifyProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [products, setProducts]: [IShopifyProduct[], React.Dispatch<React.SetStateAction<IShopifyProduct[]>>] = useState<IShopifyProduct[]>([]);

    const loadProducts = async () => {
        try {
            const response: any = await fetch('http://localhost:4242/shopify/products');
            const data = await response.json();
            const simplifiedProducts = data.products.map((product: any) => ({
                productId: product.variants[0].id,
                title: product.title,
                category: product.tags,
                price: convertPriceToNumber(product.variants[0].price),
                description: product.body_html ?? '',
                image: product.image ? product.image.src : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081'
            }));
            setProducts(simplifiedProducts);
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    const placeOrder = async (cartProducts: ICartProduct[], amount: number) => {
        const orderObject = createOrderObject(cartProducts, amount);
        try {
            const response = await fetch('http://localhost:4242/shopify/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderObject)
            });
            console.log('response', response)
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };


    const createOrderObject = (cartProducts: ICartProduct[], amount: number): IShopifyOrder => {
        return {
            line_items: cartProducts.map(cartProduct => ({
                variant_id: cartProduct.product.productId,
                quantity: cartProduct.quantity,
            })),
            email: "marin@sekic.com",
            customer: {
                first_name: "Marin",
                last_name: "Sekic",
                email: "marin@sekic.com",
            },
            billing_address: {
                first_name: "Marin",
                last_name: "Sekic",
                address1: "Hauptstrasse 1",
                phone: "+43 664 123 456 78",
                city: "Kapfenberg",
                province: "Styria",
                country: "Austria",
                zip: "8605",
            },
            shipping_address: {
                first_name: "Marin",
                last_name: "Sekic",
                address1: "Hauptstrasse 1",
                phone: "+43 664 123 456 78",
                city: "Kapfenberg",
                province: "Styria",
                country: "Austria",
                zip: "8605",
            },
            financial_status: "pending",
            transactions: [
                {
                    test: true,
                    kind: "authorization",
                    status: "success",
                    amount: amount,
                },
            ],
        };
    };

    const processTransaction = async () => {

    };

    const convertPriceToNumber = (price: string): number => {
        return Math.round(parseFloat(price) * 100);
    };

    useEffect(() => {
        loadProducts().then();
    }, []);

    return (
        <ShopifyContext.Provider value={{products, setProducts, placeOrder, processTransaction}}>
            {children}
        </ShopifyContext.Provider>
    );
};

export const useShopifyData = () => {
    const context = useContext(ShopifyContext);
    if (context === undefined) {
        throw new Error('useProductData must be used within a ProductProvider');
    }
    return context;
}