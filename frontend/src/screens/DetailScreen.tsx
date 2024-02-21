import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {COLORS, SIZES} from "../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {DetailScreenNavigationProp} from "../components/home/ProductCard";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {mockProducts, Product} from "../data/products";
import useCleanToastsOnUnfocus from "../hooks/useCleanToastsOnUnfocus";
import BottomSheet from '@gorhom/bottom-sheet';
import CheckoutButton from "../components/buttons/CheckoutButton";
import useShowToast from "../hooks/useShowToast";
import useStripePayment from "../hooks/useStripePayment";
import {useCartActions} from "../providers/CartData/useCartActions";

type DetailScreenRouteParams = {
    product: Product;
}
const DetailScreen = () => {
    const {addToCart} = useCartActions();
    const {showAddProductToast} = useShowToast();
    useCleanToastsOnUnfocus();
    const {onCheckout} = useStripePayment();

    const [quantity, setQuantity] = useState(1);

    const insets = useSafeAreaInsets();
    const navigation = useNavigation<DetailScreenNavigationProp>();
    const route = useRoute();
    const props = route.params as DetailScreenRouteParams;
    const product: Product = props.product;

    const navigateBack = () => {
        navigation.goBack();
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addProductToCart = (product: Product, quantity: number) => {
        const newCartProduct = addToCart(product, quantity);
        showAddProductToast(newCartProduct);
    };


    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['55%', '88%'], []);

    return (
        <View style={[styles.container, {paddingBottom: insets.bottom}]}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={navigateBack}>
                    <Ionicons name={'chevron-back-circle'} size={30}/>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={product.image} style={styles.image}/>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                index={0}
                enablePanDownToClose={false}
                backgroundStyle={styles.bottomSheetBackground}
                handleStyle={{
                    backgroundColor: COLORS.secondaryOpacity,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
                handleIndicatorStyle={{backgroundColor: COLORS.primary}}
                // animateOnMount={false}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.interactionContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.textTitle}>{product.title}</Text>
                                <Text style={styles.textPrice}>€ {product.price / 100}</Text>
                                <Text
                                    style={styles.textShipping}>+ {product.shippingCost === 0 ? 'Free' : product.shippingCost / 100} Shipping</Text>
                            </View>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity hitSlop={12} onPress={decrementQuantity}>
                                    <Ionicons name={'chevron-down-circle'} size={34} color={COLORS.primary}/>
                                </TouchableOpacity>
                                <Text style={styles.textQuantity}>{quantity}</Text>
                                <TouchableOpacity hitSlop={12} onPress={incrementQuantity}>
                                    <Ionicons name={'chevron-up-circle'} size={34} color={COLORS.primary}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <CheckoutButton
                                onPress={() => addProductToCart(product, quantity)}
                                isLoading={false}
                                buttonText={'Add to Cart'}/>
                            <CheckoutButton onPress={() => {
                                onCheckout((product.price * quantity) + product.shippingCost)
                            }} isLoading={false} buttonText={'Buy Now'} color={'black'}/>
                        </View>
                    </View>
                    <ScrollView style={[styles.scrollViewContainer, {marginBottom: insets.bottom}]}
                                alwaysBounceVertical={false} showsVerticalScrollIndicator={false}>
                        <Text style={styles.textDescription}>{mockProducts[0].description}</Text>
                    </ScrollView>
                </View>
            </BottomSheet>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: COLORS.offwhite
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: '7%',
        width: SIZES.width - 44,
        zIndex: 999
    },
    imageContainer: {
        width: SIZES.width,
        height: SIZES.height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    bottomSheetBackground: {
        backgroundColor: COLORS.offwhite,
    },
    bottomSheetHandle: {
        color: COLORS.primary
    },
    contentContainer: {
        flex: 1,
    },
    interactionContainer: {
        backgroundColor: COLORS.secondaryOpacity,
        paddingHorizontal: SIZES.small
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.secondaryOpacity,
        paddingBottom: 6,
        borderRadius: 12,
        paddingLeft: 12,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: SIZES.medium,
        padding: 6
    },
    textQuantity: {
        fontSize: SIZES.medium,
        width: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    detailsContainer: {
        gap: 2,
    },
    scrollViewContainer: {
        flex: 1,
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.secondaryOpacity,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.xLarge,
        color: COLORS.primary
    },
    textPrice: {
        fontSize: SIZES.medium,
        fontWeight: 'bold',
    },
    textShipping: {
        fontSize: SIZES.small,
        color: COLORS.gray,
    },
    textDescription: {
        marginVertical: 12
    },
    buttonContainer: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: '4%',
    }
});

export default DetailScreen;