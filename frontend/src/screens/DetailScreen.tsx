import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {DetailScreenNavigationProp} from "../components/home/ProductCardView";
import {ProductData} from "../components/home/ProductRow";

type DetailScreenRouteParams = {
    product: ProductData;
}
const DetailScreen = () => {
    // delete, make images dynamic., todo

    const navigation = useNavigation<DetailScreenNavigationProp>();
    const route = useRoute();
    const productImage = route.params as DetailScreenRouteParams;
    const navigateBack = () => {
        navigation.goBack();
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
            <View style={styles.details}>
                <View style={styles.productRow}>
                    <Text style={styles.title}>Macbook M3 PRO</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>€ 2499.90</Text>
                    </View>
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
    details: {
        flex: 1,
        marginTop: -SIZES.large,
        width: SIZES.width,
        backgroundColor: COLORS.lightWhite,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    productRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width -44,
        top: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price: {
        paddingHorizontal: 10,
        fontWeight: '500',
        fontSize: SIZES.large
    }
});

export default DetailScreen;