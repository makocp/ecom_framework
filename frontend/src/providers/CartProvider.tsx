import React, {createContext, ReactNode, useContext, useState} from 'react';
import {CartProduct} from "../data/products";


interface ICartContextType {
    cartProducts: CartProduct[];
    addToCart: (cartProduct: CartProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCardProducts] = useState<CartProduct[]>([]);

    const addToCart = (newCartProduct: CartProduct) => {
        setCardProducts((previousProducts) => {
            return [...previousProducts, newCartProduct];
        });
    };

    const removeFromCart = (productIdToRemove: number) => {
        setCardProducts((prevProducts) => prevProducts.filter(prevProduct => prevProduct.product.id !== productIdToRemove));
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