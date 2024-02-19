import React, {createContext, ReactNode, useContext, useState} from 'react';
import {CartProduct, Product} from "../data/products";


interface ICartContextType {
    cartProducts: CartProduct[];
    addToCart: (product: Product, quantity: number) => CartProduct;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCardProducts] = useState<CartProduct[]>([]);

    const createCartProduct = (product: Product, quantity: number): CartProduct => {
        return {id: Date.now().toString(), product: product, quantity: quantity};
    }
    const addToCart = (product: Product, quantity: number) => {
        const newCartProduct = createCartProduct(product, quantity);
        setCardProducts((previousProducts) => {
            return [...previousProducts, newCartProduct];
        });
        return newCartProduct;
    };

    const removeFromCart = (productIdToRemove: string) => {
        setCardProducts((prevProducts) => prevProducts.filter(prevProduct => prevProduct.id !== productIdToRemove));
    };

    const clearCart = () => {
        setCardProducts([]);
    };

    return (
        <CartContext.Provider value={{cartProducts, addToCart, removeFromCart, clearCart}}>
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