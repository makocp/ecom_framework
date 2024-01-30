import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../themes/theme';

const Welcome = () => {
    return (
        <View>
            {/* Welcome Text */}
            <View style={styles.container}>
                <Text style={styles.welcomeText1}>Find New</Text>
                <Text style={styles.welcomeText2}>Tech Products</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIconWrapper}>
                    <Ionicons name='search' size={24} style={styles.searchIcon}></Ionicons>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => {}}
                        placeholder='What are you looking for?'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchBtnIcon}/>
                    </TouchableOpacity>
                </View>

            </View>


            {/* Products */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.small,
        width: '100%'
    },
    welcomeText1: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        marginTop: SIZES.xSmall,
        color: COLORS.black,
        marginHorizontal: 6
    },
    welcomeText2: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        marginTop: 0,
        color: COLORS.primary,
        marginHorizontal: 6
    },
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

export default Welcome;