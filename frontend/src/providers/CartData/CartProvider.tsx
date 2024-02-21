import React, {createContext, ReactNode, useContext, useState} from 'react';
import {CartProduct, Product} from "../../data/products";


interface ICartContextType {
    cartProducts: CartProduct[];
    setCartProducts:  React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

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