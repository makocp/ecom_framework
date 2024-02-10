import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from "../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {DetailScreenNavigationProp} from "../components/home/ProductCardView";
import {ProductData} from "../components/home/ProductRow";
import {useSafeAreaInsets} from "react-native-safe-area-context";

type DetailScreenRouteParams = {
    product: ProductData;
}
const DetailScreen = () => {
    const insets = useSafeAreaInsets();
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation<DetailScreenNavigationProp>();
    const route = useRoute();
    const productImage = route.params as DetailScreenRouteParams;
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

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                {/*SafeArea? todo*/}
                <TouchableOpacity onPress={navigateBack}>
                    <Ionicons name={'chevron-back-circle'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }}>
                    <Ionicons name={'heart'} size={30} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image source={productImage.product.image} style={styles.image}/>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.productRow}>
                    <Text style={styles.title}>Macbook M3 PRO</Text>
                    <View style={styles.wrapper}>
                        <Text style={styles.price}>€ 2499.90</Text>
                    </View>
                </View>
                <ScrollView style={styles.descriptionContainer} alwaysBounceVertical={false}
                            showsVerticalScrollIndicator={false}>
                    <Text style={styles.description}>The MacBook Prs to life with stunning clarity,
                        while True Tone technology ensures comfort in any light. With up to 20 hours of battery life, a
                        responsive Magic Keyboard, and comprehensive connectivity options including Wi-Fi 6 and
                        Thunderbolt/USB 4, it's the ideal tool for profe</Text>
                </ScrollView>
            </View>
            <View style={[styles.buttonContainer, {paddingBottom: insets.bottom}]}>
                <View style={styles.buttonContainer2}>
                    <View style={[styles.deliveryWrapper]}>
                        <Ionicons name={'gift-outline'} size={16}/>
                        <Text style={styles.deliveryText}>Free Delivery</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.addRemoveButtonContainer}>
                            <TouchableOpacity onPress={decrementQuantity}>
                                <Ionicons name={'remove-circle-outline'} size={22}/>
                            </TouchableOpacity>
                            <Text style={styles.countText}>{quantity}</Text>
                            <TouchableOpacity onPress={incrementQuantity}>
                                <Ionicons name={'add-circle-outline'} size={22}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.buttonWrapperATC, {backgroundColor: COLORS.primary}]}>
                            <Ionicons name={'cart'} size={18} color={COLORS.lightWhite}/>
                            <View style={styles.cartAddIcon}>
                                <Ionicons name={'add'} size={14} color={COLORS.lightWhite}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.buttonWrapperBuy, {backgroundColor: COLORS.primary}]}>
                        <Text style={styles.textBuy}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    upperRow: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: SIZES.xxLarge,
        width: SIZES.width - 44,
        zIndex: 999
    },
    imageContainer: {
        width: SIZES.width,
        height: SIZES.height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    scrollContainer: {
        width: '100%'
    },
    detailsContainer: {
        flex: 1,
        marginTop: -SIZES.large,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
        paddingTop: '5%',
        paddingHorizontal: SIZES.medium,
    },
    productRow: {
        paddingBottom: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.large
    },
    wrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
        padding: 2
    },
    price: {
        paddingHorizontal: SIZES.xSmall,
        fontWeight: '600',
        fontSize: SIZES.medium
    },
    ratingRow: {
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
        paddingBottom: SIZES.small
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginHorizontal: SIZES.large,
        alignItems: 'center'
    },
    descriptionContainer: {
        width: '100%',
        paddingBottom: '10%',
    },
    descriptionTitle: {
        fontWeight: '600',
        fontSize: SIZES.medium,
    },
    description: {
        fontSize: SIZES.small + 2,
        width: '100%',
        paddingHorizontal: 1,
        textAlign: 'justify'
    },
    deliveryWrapper: {
        flexDirection: 'row',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingHorizontal: 12,
        gap: 4,
        flex: 1
    },
    deliveryContainer: {
        width: '100%',
        paddingBottom: '3%',
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightWhite
    },
    deliveryText: {
        fontSize: SIZES.medium,
        fontWeight: '600'
    },
    buttonWrapperBuy: {
        borderRadius: SIZES.large,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        height: 50,
        flex: 5
    },
    buttonWrapperATC: {
        borderRadius: SIZES.large,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: -4,
        height: 40,
        padding: 6
    },
    buttonRow: {
        width: '100%',
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textBuy: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
        color: COLORS.lightWhite
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: SIZES.medium,
        backgroundColor: COLORS.lightWhite,
        gap: 12,
        paddingTop: '2%',
    },
    buttonContainer2: {
        flexDirection: 'row',
        width: '100%',
        gap: 12
    },
    cartAddIcon: {
        marginTop: -16
    },
    buttonWrapperIncrement: {
        flexDirection: 'row',
        gap: 8,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        backgroundColor: COLORS.black,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addRemoveButtonContainer: {
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    countText: {
        fontWeight: 'bold',
        fontSize: 14,
        width: 20,
        textAlign: 'center'
    }
});

export default DetailScreen;