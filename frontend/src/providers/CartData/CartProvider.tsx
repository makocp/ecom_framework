import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ICartProduct} from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ICartContextType {
    cartProducts: ICartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
    const keyCartProducts = '@cart-products';

    const loadCartProducts = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(keyCartProducts);
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    const saveCartProducts = async (products: ICartProduct[]) => {
        try {
            const jsonValue = JSON.stringify(products);
            await AsyncStorage.setItem(keyCartProducts, jsonValue);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        loadCartProducts().then(setCartProducts);
    }, []);

    useEffect(() => {
        saveCartProducts(cartProducts);
    }, [cartProducts]);

    return (
        <CartContext.Provider value={{cartProducts, setCartProducts}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartData = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCartData must be used within a CartProvider');
    }
    return context;
};