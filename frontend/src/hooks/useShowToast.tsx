import Toast from "react-native-toast-message";
import {CartProduct, Product} from "../data/products";
import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabsStackParamList} from "../navigators/TabsNavigator";

const useShowToast = () => {

    type ToastProp = BottomTabNavigationProp<TabsStackParamList, 'CartScreen'>;
    const navigation = useNavigation<ToastProp>();
    const navigateToCartScreen = () => {
        navigation.navigate('CartScreen');
    };

    const showRemoveProductToast = (cartProduct: CartProduct) => {
        Toast.show({
            type: 'custom_success',
            text1: `Product Removed`,
            text2: `${cartProduct.product.title} has been successfully removed from your cart.`,
            props: {image: cartProduct.product.image},
        });
    };

    const showAddProductToast = (cartProduct: CartProduct) => {
        Toast.show({
            type: 'custom_success',
            text1: `Product Added`,
            text2: `${cartProduct.product.title} has been successfully added to your cart.`,
            props: {
                image: cartProduct.product.image,
                navigationText: 'View Cart',
                onNavigationPress: () => {navigateToCartScreen()},
            },
            visibilityTime: 5000
        });
    };



    return {showRemoveProductToast, showAddProductToast};
};

export default useShowToast;