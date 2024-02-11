import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../themes/theme";

// type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;
type AppBarProps = {
    screenName: string
}
const AppBar = (props: AppBarProps) => {

    // const navigation = useNavigation<CartScreenNavigationProp>();
    // const navigateToCartScreen = () => {
    //     navigation.navigate('CartScreen');
    // };
    return (
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                {/*<Ionicons name='location-outline' size={24}/>*/}
                <Text style={styles.screenName}>{props.screenName}</Text>
                {/*<TouchableOpacity onPress={navigateToCartScreen} style={styles.iconContainer}>*/}
                {/*    <View style={styles.cartCount}>*/}
                {/*        <Text style={styles.cartNumber}>3</Text>*/}
                {/*    </View>*/}
                {/*    <View>*/}
                {/*        <Ionicons name='cart' size={24}/>*/}
                {/*        /!* <Ionicons name='bag-check-outline' size={24} /> *!/*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
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
        justifyContent: 'center'
    },
    screenName: {
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
    },
    iconContainer: {
        alignItems: 'flex-end',
        position: 'absolute',
        right: 0
    }
});
