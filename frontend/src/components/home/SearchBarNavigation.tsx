import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";
import {useNavigation} from "@react-navigation/native";
import {TabsStackParamList} from "../../navigators/TabsNavigator";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";

type SearchScreenNavigationProp = BottomTabNavigationProp<TabsStackParamList, 'AllProductsScreen'>;
type SearchBarProps = {
    caretHidden: boolean
}
const SearchBarNavigation = (props: SearchBarProps) => {
    const navigation = useNavigation<SearchScreenNavigationProp>();

    const navigateToSearchScreen = () => {
        navigation.navigate('AllProductsScreen', {isFromSearch: true});
    };

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                    caretHidden={props.caretHidden}
                    style={styles.searchInput}
                    value=''
                    onPressIn={navigateToSearchScreen}
                    placeholder='What are you looking for?'
                    editable={false}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn} onPress={navigateToSearchScreen}>
                    <Ionicons name='search' size={SIZES.xLarge} style={styles.searchBtnIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBarNavigation;

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