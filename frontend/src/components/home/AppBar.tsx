import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../navigators/RootNavigator";

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;
const AppBar = () => {

    const navigation = useNavigation<CartScreenNavigationProp>();
    const navigateToCartScreen = () => {
        navigation.navigate('CartScreen');
    };
    return (
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <Ionicons name='location-outline' size={24}/>
                <Text style={styles.location}>Graz, Austria</Text>
                <TouchableOpacity onPress={navigateToCartScreen} style={{alignItems: 'flex-end'}}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>3</Text>
                    </View>
                    <View>
                        <Ionicons name='cart' size={24}/>
                        {/* <Ionicons name='bag-check-outline' size={24} /> */}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    appBarWrapper: {
        marginHorizontal: SIZES.large,
        marginTop: SIZES.small,
        marginBottom: '2%'
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontWeight: 'bold',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: '600',
        fontSize: 10,
        color: COLORS.lightWhite
    }
});
