import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from "../../themes/theme";
import Toast, {ToastConfig} from "react-native-toast-message";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabsStackParamList} from "../../navigators/TabsNavigator";

export const toastConfig: ToastConfig = {
    custom_success: ({text1, text2, props}) => (
        <CustomToast
            type="success"
            text1={text1}
            text2={text2}
            image={props.image}
            navigationText={props.navigationText}
            onNavigationPress={props.onNavigationPress}
        />
    ),
};

// Props type definition, adapt as needed based on what you will pass
interface CustomToastProps {
    type: 'success' | 'error' | 'info';
    text1?: string;
    text2?: string;
    image?: string;
    navigationText?: string;
    onNavigationPress?: () => void;
}

const CustomToast = ({type, text1, text2, image, navigationText, onNavigationPress}: CustomToastProps) => {

    return (
        <View style={[styles.container, {borderColor: COLORS.primary}]}>
            <TouchableOpacity activeOpacity={1} style={styles.touchableContainer}
                              onPress={() => Toast.hide()}>
                {image && <Image source={{uri: image}} style={styles.image}/>}
                <View style={styles.textContainer}>
                    <Text
                        style={[styles.text1, {color: type === 'success' ? COLORS.primary : 'red'}]}>{text1}</Text>
                    <Text style={[styles.text2, {color: COLORS.gray}]}>{text2}</Text>
                </View>
                <Ionicons name={'close'} size={24} color={COLORS.primary} style={{opacity: 0.3}}/>
            </TouchableOpacity>
            {navigationText && onNavigationPress && (
                <TouchableOpacity style={styles.navigationContainer} onPress={onNavigationPress} hitSlop={{top: 12, bottom: 12, left: 12, right: 12}}>
                    <Text style={styles.navigationText}>{navigationText}</Text>
                    <Ionicons name={'arrow-forward'} size={16} color={COLORS.lightWhite} style={{position: 'absolute', right: SIZES.medium}}/>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: COLORS.offwhite,
        alignItems: 'center',
        marginHorizontal: SIZES.medium,
        marginTop: SIZES.xLarge,
        gap: 6,
        width: '90%'
    },
    touchableContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text2: {
        fontSize: 14,
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 6,
        padding: 6,
        paddingHorizontal: 12,
        borderRadius: SIZES.small,
        alignItems: 'center',
        height: 40,
        backgroundColor: COLORS.primary,
        width: '100%'
    },
    navigationText: {
        color: COLORS.lightWhite,
        fontWeight: 'bold',
        fontSize: 14,
    },
    cartContent: {
        flexDirection: 'row',
        gap: 6
    }
});

export default CustomToast;
