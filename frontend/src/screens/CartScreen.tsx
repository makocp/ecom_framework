import {Alert, Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {useStripe} from '@stripe/stripe-react-native';
import {API_URL_PAYMENT_INTENT} from '../routes/Routes';
import FadeInScreen from "./FadeInScreen";
import AppBar from "../components/home/AppBar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import CartProductCard from "../components/cart/CartProductCard";
import {COLORS, SIZES} from "../themes/theme";
import {mockCartProducts} from "../data/products";
import useCartCalculations from "../hooks/useCartCalculations";
import useStripePayment from "../hooks/useStripePayment";
import useCurrencyCalculations from "../hooks/useCurrencyCalculations";

const CartScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const insets = useSafeAreaInsets();
    // todo: dynamically, from backend.
    const cartProductData = mockCartProducts;
    const {subtotal, shipping, total} = useCartCalculations({cartProductData});
    const {transformCentsToEuroString} = useCurrencyCalculations();
    const {onCheckout} = useStripePayment({isLoading, setIsLoading});

    return (
        <FadeInScreen>
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <AppBar screenName={'Cart'}/>
                <View style={styles.scrollContainer}>
                    <FlatList
                        data={cartProductData}
                        renderItem={({item}) => <CartProductCard cartProduct={item} isLoading={isLoading} setIsLoading={setIsLoading}/>}
                        alwaysBounceVertical={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainerContent}
                    />
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
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonCheckout} disabled={isLoading}
                                              onPress={() => onCheckout(total)}>
                                <Text style={styles.buttonCheckoutText}>Checkout
                                    € {transformCentsToEuroString(total)}</Text>
                            </TouchableOpacity>
                        </View>
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
    buttonContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.small,
        height: 50,
        alignSelf: 'center',
        marginTop: SIZES.small,
        backgroundColor: COLORS.primary
    },
    buttonCheckout: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCheckoutText: {
        color: COLORS.lightWhite,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CartScreen;