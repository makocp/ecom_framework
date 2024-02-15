import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from "../../themes/theme";
import {CartProduct, mockProducts} from "../../data/products";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {DetailScreenNavigationProp} from "../home/ProductCard";

type CartProductDataProps = {
    cartProduct: CartProduct
}
const CartProductCard = ({cartProduct}: CartProductDataProps) => {
    const navigation = useNavigation<DetailScreenNavigationProp>();
    const navigateToDetailScreen = () => {
        navigation.navigate('DetailScreen', {product: cartProduct.product})
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
                    <Text style={styles.price} numberOfLines={1}>€ {cartProduct.product.price/100} x {cartProduct.quantity}</Text>
                </View>
                <View style={styles.buttonColumn}>
                    <TouchableOpacity style={styles.buttonDelete}>
                        <Ionicons name={'trash-outline'} size={20} color={COLORS.tertiary}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCheckout}>
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
        color: COLORS.gray
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