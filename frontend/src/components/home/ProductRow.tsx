import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {SIZES} from "../../themes/theme";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
    const products = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => <ProductCardView/>}
                horizontal
                contentContainerStyle={{columnGap: SIZES.medium}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium
    }
});

export default ProductRow;