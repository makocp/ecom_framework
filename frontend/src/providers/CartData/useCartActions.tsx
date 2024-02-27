import {useCartData} from "./CartProvider";
import {ICartProduct, IProduct} from "../../types/types";

export const useCartActions = () => {
    const { setCartProducts } = useCartData();

    const createCartProduct = (product: IProduct, quantity: number): ICartProduct => {
        return {cartProductId: Date.now().toString(), product: product, quantity: quantity};
    }
    const addToCart = (product: IProduct, quantity: number) => {
        const newCartProduct = createCartProduct(product, quantity);
        setCartProducts((previousProducts) => {
            return [...previousProducts, newCartProduct];
        });
        return newCartProduct;
    };

    const removeFromCart = (productIdToRemove: string) => {
        setCartProducts((prevProducts) => prevProducts.filter(prevProduct => prevProduct.cartProductId !== productIdToRemove));
    };

    const clearCart = () => {
        setCartProducts([]);
    };

    return { addToCart, removeFromCart, clearCart, createCartProduct };
};

export default useCartActions;