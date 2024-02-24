import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from "../../themes/theme";

type CustomButtonProps = {
    onPress: () => void;
    isLoading: boolean;
    buttonText: string;
    color?: string;
}
const CheckoutButton = (props: CustomButtonProps) => {
    return (
        <View style={[styles.buttonContainer, {backgroundColor: props.color ? props.color : COLORS.primary}]}>
            <TouchableOpacity style={styles.buttonTouchable} disabled={props.isLoading}
                              onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.small,
        height: 50,
        alignSelf: 'center',
        marginTop: SIZES.small,
        backgroundColor: COLORS.primary
    },
    buttonTouchable: {
        width: '100%',
        height: '100%',
        borderRadius: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.lightWhite,
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default CheckoutButton;