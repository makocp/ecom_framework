import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {COLORS, SIZES} from "../../themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";
import LoginBottomSheet from "../bottomsheets/LoginBottomSheet";
import ShippingInfoBottomSheet from "../bottomsheets/ShippingInfoBottomSheet";

// type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;
type AppBarProps = {
    screenName: string,
    openShippingBottomSheet?: () => void,
    openLoginBottomSheet?: () => void
}
const AppBar = (props: AppBarProps) => {


    return (
        <View style={styles.appBarWrapper}>
            {props.screenName === 'Home' ?
                <View style={styles.appBarHome}>
                    <TouchableOpacity hitSlop={12} onPress={props.openShippingBottomSheet}>
                        <Ionicons name={'location'} size={28} color={COLORS.primary}/>
                    </TouchableOpacity>
                    <Text style={styles.screenName}>{props.screenName}</Text>
                    <TouchableOpacity hitSlop={12} onPress={props.openLoginBottomSheet}>
                        <Ionicons name={'person-circle'} size={32} color={COLORS.primary}/>
                    </TouchableOpacity>
                </View> :
                <View style={styles.appBar}>
                    <Text style={styles.screenName}>{props.screenName}</Text>
                </View>
            }
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
        paddingHorizontal: SIZES.large,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 65
    },
    appBarHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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
