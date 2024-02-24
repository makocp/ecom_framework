import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import FadeInScreen from "./FadeInScreen";
import AppBar from "../components/home/AppBar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import CartProductCard from "../components/cart/CartProductCard";
import {COLORS, SIZES} from "../themes/theme";
import useCartCalculations from "../hooks/useCartCalculations";
import useStripePayment from "../hooks/useStripePayment";
import useCurrencyCalculations from "../hooks/useCurrencyCalculations";
import {useCart} from "../providers/CartData/CartProvider";
import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabsStackParamList} from "../navigators/TabsNavigator";
import useCleanToastsOnUnfocus from "../hooks/useCleanToastsOnUnfocus";
import CheckoutButton from "../components/buttons/CheckoutButton";
import useCheckout from "../hooks/useCheckout";

type CartScreenNavigationProp = BottomTabNavigationProp<TabsStackParamList, 'AllProductsScreen'>;
const CartScreen = () => {
    const {isLoading} = useStripePayment();
    const insets = useSafeAreaInsets();
    // todo: dynamically, from backend.
    // const cartProductData = mockCartProducts;
    const {cartProducts} = useCart();
    const {subtotal, shipping, total} = useCartCalculations({cartProductData: cartProducts});
    const {transformCentsToEuroString} = useCurrencyCalculations();
    const navigation = useNavigation<CartScreenNavigationProp>();
    useCleanToastsOnUnfocus();
    const {onCheckoutCartAll} = useCheckout();


    const navigateToAllProductsScreen = () => {
        navigation.navigate('AllProductsScreen', {isFromSearch: false});
    };

    return (
        <FadeInScreen>
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <AppBar screenName={'Cart'}/>
                <View style={styles.scrollContainer}>
                    {cartProducts.length === 0 ? (
                        <View style={styles.infoContainer}>
                            <Text style={styles.summaryText}>No products in your cart.</Text>
                            <TouchableOpacity hitSlop={12} style={{paddingTop: 4}}
                                              onPress={navigateToAllProductsScreen}>
                                <Text style={styles.summaryTitle}>Add New Products</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <>
                            <FlatList
                                data={cartProducts}
                                renderItem={({item}) => <CartProductCard cartProduct={item}/>}
                                alwaysBounceVertical={false}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={styles.scrollContainerContent}
                            />
                        </>
                    )}
                    <View style={styles.summaryContainer}>
                        <Text style={styles.summaryTitle}>Order Info</Text>
                        <View style={styles.summaryAmountContainer}>
                            <View style={styles.summarySubtotal}>
                                <Text style={styles.summaryText}>Subtotal</Text>
                                <Text
                                    style={styles.summaryText}>€ {transformCentsToEuroString(subtotal)}</Text>
                            </View>
                            <View style={styles.summaryShipping}>
                                <Text style={styles.summaryText}>Shipping</Text>
                                <Text
                                    style={styles.summaryText}>€ {transformCentsToEuroString(shipping)}</Text>
                            </View>
                            <View style={styles.summaryTotal}>
                                <Text style={styles.summaryTextTotal}>TOTAL</Text>
                                <Text
                                    style={styles.summaryTextTotal}>€ {transformCentsToEuroString(total)}</Text>
                            </View>
                        </View>
                        <CheckoutButton isLoading={isLoading} onPress={() => onCheckoutCartAll(cartProducts)}
                                        buttonText={`Checkout € ${transformCentsToEuroString(total)}`}/>
                    </View>
                </View>

            </View>
        </FadeInScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: SIZES.small,
    },
    scrollContainer: {
        width: '100%',
        flex: 1
    },
    scrollContainerContent: {
        gap: 12,
        marginVertical: 6,
        marginHorizontal: 6,
        paddingBottom: 12
    },
    summaryContainer: {
        width: '100%',
        paddingVertical: SIZES.medium,
    },
    summaryTitle: {
        fontWeight: 'bold',
        color: COLORS.primary,
        fontSize: 16,
        paddingHorizontal: SIZES.xSmall
    },
    summaryAmountContainer: {
        paddingTop: SIZES.small,
        gap: 4,
        width: '100%'
    },
    summarySubtotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small
    },
    summaryShipping: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small
    },
    summaryTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small
    },
    summaryText: {
        fontSize: 14,
        color: COLORS.gray
    },
    summaryTextTotal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.gray
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CartScreen;