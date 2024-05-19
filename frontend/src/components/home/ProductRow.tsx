import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {SIZES} from "../../themes/theme";
import ProductCard from "./ProductCard";
import {mockProducts} from "../../data/mockData";
import {useShopifyData} from "../../providers/ProductData/ShopifyProvider";


const ProductRow = () => {
    const {products} = useShopifyData();

    return (
        <View style={styles.container}>
            <FlatList
                data={products.slice(4,7)}
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