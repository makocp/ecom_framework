import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../themes/theme";

// type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;
type AppBarProps = {
    screenName: string
}
const AppBar = (props: AppBarProps) => {
    return (
        <View style={styles.appBarWrapper}>
            <View style={styles.appBar}>
                <Text style={styles.screenName}>{props.screenName}</Text>
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
        marginBottom: '5%',
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
