import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import SearchBar from "../components/search/SearchBar";
import {RouteProp, useRoute} from "@react-navigation/native";
import {TabsStackParamList} from "../navigators/TabsNavigator";

const AllProductsScreen = () => {
    const insets = useSafeAreaInsets();
    const route = useRoute<RouteProp<TabsStackParamList, 'AllProductsScreen'>>();
    const searchBarRef = useRef<TextInput>(null);

    useEffect(() => {
        if (route.params?.isFromSearch) {
            searchBarRef.current?.focus();
        }
    }, [route.params?.isFromSearch]);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            {/*// todo: if navigate here -> click directly into input.*/}
            <SearchBar ref={searchBarRef}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    }
});

export default AllProductsScreen;