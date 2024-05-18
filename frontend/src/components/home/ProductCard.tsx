import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SHADOWS, SIZES} from "../../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../navigators/RootNavigator";
import useShowToast from "../../hooks/useShowToast";
import {useCartActions} from "../../providers/CartData/useCartActions";
import {IProduct} from "../../types/types";
import {IShopifyProduct} from "../../providers/ProductData/ShopifyProvider";

type ProductDataProps = {
    product: IShopifyProduct,
}
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailScreen'>
const ProductCard = ({product}: ProductDataProps) => {
    const {addToCart} = useCartActions();
    const {showAddProductToast} = useShowToast();

    const navigation = useNavigation<DetailScreenNavigationProp>();
    const navigateToDetailScreen = () => {
        navigation.navigate('DetailScreen', {product: product});
    };

    const addProductToCart = (product: IShopifyProduct, quantity: number) => {
        const newCartProduct = addToCart(product, quantity);
        showAddProductToast(newCartProduct);
    };

    return (
        <TouchableOpacity onPress={navigateToDetailScreen}>
            <View style={[styles.container, SHADOWS.small]}>
                <View style={styles.imageWrapper}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{uri: product.image}}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.price}>€{product.price / 100}</Text>
                </View>
                <TouchableOpacity style={styles.addBtn} onPress={() => addProductToCart(product, 1)}>
                    <Ionicons name={'add-circle'} size={36} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        width: 182,
        height: 240,
        borderRadius: SIZES.medium,
        margin: 4
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: COLORS.gray2,
        flex: 1,
        overflow: 'hidden',
        width: '90%',
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.large,
        marginBottom: 2
    },
    category: {
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontWeight: 'bold',
        fontSize: SIZES.medium,
    },
    addBtn: {
        position: 'absolute',
        bottom: SIZES.xSmall,
        right: SIZES.xSmall,
    }
});

export default ProductCard;