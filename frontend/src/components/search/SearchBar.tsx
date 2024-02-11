import {Keyboard, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {forwardRef} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";

type SearchBarProps = {
    onChangeText: (text: string) => void
}
const SearchBar = forwardRef<TextInput, SearchBarProps>(({onChangeText}, ref) => {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='What are you looking for?'
                    ref={ref}
                    onBlur={dismissKeyboard}
                    placeholderTextColor={COLORS.gray}
                    onChangeText={onChangeText}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn} onPress={dismissKeyboard}>
                    <Ionicons name='search' size={SIZES.xLarge} style={styles.searchBtnIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
});

export default SearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        marginHorizontal: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
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