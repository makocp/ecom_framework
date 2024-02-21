import { useContext } from 'react';
import {useCart} from "./CartProvider";
import {CartProduct, Product} from "../../data/products";

export const useCartActions = () => {
    const { setCartProducts } = useCart();

    const createCartProduct = (product: Product, quantity: number): CartProduct => {
        return {id: Date.now().toString(), product: product, quantity: quantity};
    }
    const addToCart = (product: Product, quantity: number) => {
        const newCartProduct = createCartProduct(product, quantity);
        setCartProducts((previousProducts) => {
            return [...previousProducts, newCartProduct];
        });
        return newCartProduct;
    };

    const removeFromCart = (productIdToRemove: string) => {
        setCartProducts((prevProducts) => prevProducts.filter(prevProduct => prevProduct.id !== productIdToRemove));
    };

    const clearCart = () => {
        setCartProducts([]);
    };

    return { addToCart, removeFromCart, clearCart };
};