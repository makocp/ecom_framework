import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from "../../themes/theme";
import Toast, {ToastConfig} from "react-native-toast-message";

export const toastConfig: ToastConfig = {
    custom_success: ({text1, text2, props}) => (
        <CustomToast
            type="success"
            text1={text1}
            text2={text2}
            image={props.image} // Passing custom props to the custom toast
        />
    ),
};

// Props type definition, adapt as needed based on what you will pass
interface CustomToastProps {
    type: 'success' | 'error' | 'info';
    text1?: string;
    text2?: string;
    image?: number;
}

const CustomToast = ({type, text1, text2, image}: CustomToastProps) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.container, {borderColor: COLORS.primary}]}
                          onPress={() => Toast.hide()}>
            {image && <Image source={image} style={styles.image}/>}
            <View style={styles.textContainer}>
                <Text
                    style={[styles.text1, {color: type === 'success' ? COLORS.primary : 'red'}]}>{text1}</Text>
                <Text style={[styles.text2, {color: COLORS.gray}]}>{text2}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: COLORS.offwhite,
        alignItems: 'center',
        marginHorizontal: SIZES.medium,
        marginTop: SIZES.medium
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
});

export default CustomToast;
