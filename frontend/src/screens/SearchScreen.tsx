import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import SearchBar2 from "../components/search/SearchBar2";

// todo: if navigate here -> click directly into input.
const SearchScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SearchBar2/>
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});