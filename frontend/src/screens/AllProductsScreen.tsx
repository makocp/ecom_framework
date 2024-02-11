import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import SearchBar from "../components/search/SearchBar";
import {RouteProp, useRoute} from "@react-navigation/native";
import {TabsStackParamList} from "../navigators/TabsNavigator";
import {mockProducts} from "../data/products";
import ProductCardView from "../components/home/ProductCardView";

const AllProductsScreen = () => {
    const insets = useSafeAreaInsets();
    const route = useRoute<RouteProp<TabsStackParamList, 'AllProductsScreen'>>();
    const searchBarRef = useRef<TextInput>(null);

    useEffect(() => {
        if (route.params?.isFromSearch) {
            searchBarRef.current?.focus();
        }
    },);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <SearchBar ref={searchBarRef}/>
            <View style={styles.scrollContainer}>
                <FlatList
                    data={mockProducts}
                    renderItem={({item}) => <ProductCardView product={item}/>}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    contentContainerStyle={styles.scrollContainerContent}
                />
            </View>
        </View>
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
        paddingBottom: '16%'
    }
});

export default AllProductsScreen;