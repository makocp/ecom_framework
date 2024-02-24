import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {CartProduct} from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ICartContextType {
    cartProducts: CartProduct[];
    setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
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

    const saveCartProducts = async (products: CartProduct[]) => {
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

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};