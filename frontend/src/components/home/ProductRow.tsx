import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {SIZES} from "../../themes/theme";
import ProductCard from "./ProductCard";
import {mockProducts} from "../../data/products";


const ProductRow = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={mockProducts.slice(4,7)}
                renderItem={({item}) => <ProductCard product={item}/>}
                horizontal
                contentContainerStyle={styles.flatListContainer}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: '1.5%'
    },
    container: {
        marginTop: SIZES.medium,
    }
});

export default ProductRow;