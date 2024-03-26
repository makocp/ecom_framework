import Toast from "react-native-toast-message";
import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabsStackParamList} from "../navigators/TabsNavigator";
import {ICartProduct} from "../types/types";

const useShowToast = () => {

    type ToastProp = BottomTabNavigationProp<TabsStackParamList, 'CartScreen'>;
    const navigation = useNavigation<ToastProp>();
    const navigateToCartScreen = () => {
        navigation.navigate('CartScreen');
    };

    const showRemoveProductToast = (cartProduct: ICartProduct) => {
        Toast.show({
            type: 'custom_success',
            text1: `Product Removed`,
            text2: `${cartProduct.product.title} has been removed from your cart.`,
            props: {image: cartProduct.product.image},
        });
    };

    const showAddProductToast = (cartProduct: ICartProduct) => {
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