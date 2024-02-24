import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import SearchBar from "../components/search/SearchBar";
import {RouteProp, useRoute} from "@react-navigation/native";
import {TabsStackParamList} from "../navigators/TabsNavigator";
import {mockProducts} from "../data/products";
import ProductCard from "../components/home/ProductCard";
import AppBar from "../components/home/AppBar";
import FadeInScreen from "./FadeInScreen";
import useCleanToastsOnUnfocus from "../hooks/useCleanToastsOnUnfocus";
import {Product} from "../types/types";

const AllProductsScreen = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
    const insets = useSafeAreaInsets();
    const route = useRoute<RouteProp<TabsStackParamList, 'AllProductsScreen'>>();
    const searchBarRef = useRef<TextInput>(null);
    useCleanToastsOnUnfocus();

    function debounce(func: any, wait: number) {
        let timeout: any;

        return function (...args: any[]) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedSetSearchQuery = useRef(debounce(setSearchQuery, 200)).current;

    useEffect(() => {
        if (route.params?.isFromSearch) {
            searchBarRef.current?.focus();
        }
    }, [route.params?.isFromSearch]);

    useEffect(() => {
        const lowercaseQuery = searchQuery.toLowerCase();
        const filteredProducts = mockProducts.filter(product =>
            product.title.toLowerCase().includes(lowercaseQuery) ||
            product.category.toLowerCase().includes(lowercaseQuery) ||
            product.description.toLowerCase().includes(lowercaseQuery)
        );
        setFilteredProducts(filteredProducts);
    }, [searchQuery]);


    return (
        <FadeInScreen>
            <View style={[styles.container, {paddingTop: insets.top}]}>
                <AppBar screenName={'All Products'}></AppBar>
                <SearchBar
                    ref={searchBarRef}
                    onChangeText={(text: string) => debouncedSetSearchQuery(text)}
                />
                <View style={styles.scrollContainer}>
                    <FlatList
                        data={filteredProducts}
                        renderItem={({item}) => <ProductCard product={item}/>}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        contentContainerStyle={styles.scrollContainerContent}
                    />
                </View>
            </View>
        </FadeInScreen>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    scrollContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '4%',
    },
    scrollContainerContent: {
        paddingBottom: '34%',
    }
});

export default AllProductsScreen;