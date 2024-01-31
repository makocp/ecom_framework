import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../themes/theme";

const ProductCardView = () => {
    const data = [
        {image: require('../../assets/images/sample_image_1.png')},
        {image: require('../../assets/images/sample_image_2.png')},
        {image: require('../../assets/images/sample_image_3.png')}
    ];

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={data[0].image}
                        style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>Product Title</Text>
                    <Text style={styles.supplier}>Name</Text>
                    <Text style={styles.price}>$2379</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.secondary,
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium
    },
    imageContainer: {
        backgroundColor: COLORS.gray2,
        flex: 1,
        overflow: 'hidden',
        width: 170,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        padding: SIZES.small
    },
    title: {
        fontWeight: 'bold',
        fontSize: SIZES.large
    },
    supplier: {

    },
    price: {

    }
});

export default ProductCardView;