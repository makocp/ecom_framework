import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";

const SearchBar2 = () => {
    return (
        <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchIconWrapper}>
                <Ionicons name='search' size={24} style={styles.searchIcon}></Ionicons>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=''
                    onPressIn={() => {
                    }}
                    placeholder='What are you looking for?'
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='search-outline' size={SIZES.xLarge} style={styles.searchBtnIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBar2;

const styles = StyleSheet.create({
    searchContainer: {
        marginHorizontal: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIconWrapper: {
        height: '100%',
        justifyContent: 'center',
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    searchBtnIcon: {
        color: COLORS.white
    }
});