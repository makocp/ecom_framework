import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../navigators/RootNavigator";
import {Product} from "../../data/products";

type ProductDataProps = {
    product: Product,
}
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailScreen'>
const ProductCardView = ({product}: ProductDataProps) => {

    const navigation = useNavigation<DetailScreenNavigationProp>();
    const navigateToDetailScreen = () => {
        navigation.navigate('DetailScreen', {product: product});
    };

    return (
        <TouchableOpacity onPress={navigateToDetailScreen}>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={product.image}
                            style={styles.image}
                        />
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.price}>€{product.price/100}</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name={'add-circle'} size={36} color={COLORS.primary} onPress={() => {}}/>
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
        right: SIZES.xSmall
    }
});

export default ProductCardView;