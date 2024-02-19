import Toast from "react-native-toast-message";
import {CartProduct} from "../data/products";

const useShowToast = () => {
    const showRemoveProductToast = (cartProduct: CartProduct) => {
        Toast.show({
            type: 'custom_success',
            text1: `Product Removed`,
            text2: `${cartProduct.product.title} has been successfully removed from your cart.`,
            props: {image: cartProduct.product.image}
        });
    };

    const showAddProductToast = (cartProduct: CartProduct) => {
        Toast.show({
            type: 'custom_success',
            text1: `Product Added`,
            text2: `${cartProduct.product.title} has been successfully added to your cart.`,
            props: {image: cartProduct.product.image}
        });
    };

    return {showRemoveProductToast, showAddProductToast};
};

export default useShowToast;