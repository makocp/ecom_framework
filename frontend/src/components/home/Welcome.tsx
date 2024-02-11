import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../themes/theme';

const Welcome = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText1}>Find New</Text>
                <Text style={styles.welcomeText2}>Tech Products</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.small,
        width: '100%',
        paddingBottom: '2%'
    },
    welcomeText1: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        color: COLORS.black,
        marginHorizontal: 6
    },
    welcomeText2: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        color: COLORS.primary,
        marginHorizontal: 6
    },
});

export default Welcome;