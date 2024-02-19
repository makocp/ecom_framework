import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from "../../themes/theme";
import {CartProduct, mockProducts} from "../../data/products";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {DetailScreenNavigationProp} from "../home/ProductCard";
import useCurrencyCalculations from "../../hooks/useCurrencyCalculations";
import useStripePayment from "../../hooks/useStripePayment";
import {useCart} from "../../providers/CartProvider";
import useShowToast from "../../hooks/useShowToast";

type CartProductDataProps = {
    cartProduct: CartProduct,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}
const CartProductCard = ({cartProduct, isLoading, setIsLoading}: CartProductDataProps) => {
    const {transformCentsToEuroString} = useCurrencyCalculations();
    const {onCheckout} = useStripePayment({isLoading, setIsLoading});
    const {removeFromCart} = useCart();
    const {showRemoveProductToast} = useShowToast();

    const navigation = useNavigation<DetailScreenNavigationProp>();
    const navigateToDetailScreen = () => {
        navigation.navigate('DetailScreen', {product: cartProduct.product})
    }

    const removeCartProduct = (cartProduct: CartProduct) => {
        removeFromCart(cartProduct.id);
        showRemoveProductToast(cartProduct);
    }

    return (
        <TouchableOpacity onPress={navigateToDetailScreen}>
            <View style={[styles.container, SHADOWS.small]}>
                <View style={styles.imageContainer}>
                    <Image
                        source={cartProduct.product.image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.title} numberOfLines={1}>{cartProduct.product.title}</Text>
                        <Text style={styles.category} numberOfLines={1}>{cartProduct.product.category}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}
                              numberOfLines={1}>€ {transformCentsToEuroString(cartProduct.product.price)} x {cartProduct.quantity}</Text>
                        <Text style={styles.price2}
                              numberOfLines={1}>+ {cartProduct.product.shippingCost === 0 ? 'Free' : transformCentsToEuroString(cartProduct.product.shippingCost)} Shipping</Text>
                    </View>
                </View>
                <View style={styles.buttonColumn}>
                    {/*<TouchableOpacity style={styles.buttonDelete} onPress={() => removeFromCart(cartProduct.id)}>*/}
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => removeCartProduct(cartProduct)}>
                        <Ionicons name={'trash-outline'} size={20} color={COLORS.tertiary}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCheckout}
                                      onPress={() => {
                                          onCheckout((cartProduct.product.price * cartProduct.quantity) + cartProduct.product.shippingCost)
                                      }}>
                        <Text style={styles.buttonText}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100
    },
    imageContainer: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: SIZES.small,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    info: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.xSmall
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    category: {
        fontSize: 14,
        color: COLORS.gray
    },
    price: {
        fontSize: 14,
        color: COLORS.gray,
    },
    price2: {
        fontSize: 11,
        color: COLORS.gray,
    },
    buttonColumn: {
        height: '100%',
        justifyContent: 'space-between',
    },
    buttonCheckout: {
        backgroundColor: COLORS.primary,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    buttonDelete: {
        alignItems: 'flex-end',
        padding: 4
    },
    buttonText: {
        color: COLORS.lightWhite,
        fontSize: SIZES.small,
        fontWeight: 'bold'
    }
});

export default CartProductCard;