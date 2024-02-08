import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {SIZES} from "../../themes/theme";
import ProductCardView from "./ProductCardView";

export type ProductData = {
    id: string,
    image: any
};
const ProductRow = () => {
    // change dynamically, according to product, todo.
    const mockData: ProductData[] = [
        {id: '1', image: require('../../assets/images/sample_image_1.png')},
        {id: '2', image: require('../../assets/images/sample_image_2.png')},
        {id: '3', image: require('../../assets/images/sample_image_3.png')}
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={mockData}
                renderItem={({item}) => <ProductCardView product={item}/>}
                horizontal
                contentContainerStyle={styles.flatListContainer}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        columnGap: SIZES.medium,
        paddingHorizontal: SIZES.small
    },
    container: {
        marginTop: SIZES.medium,
    }
});

export default ProductRow;