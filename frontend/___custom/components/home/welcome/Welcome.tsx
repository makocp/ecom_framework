import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS } from '../../../themes/theme';

const Welcome = () => {
    return (
        <View>
            <View style={styles.container}>
                {/* <Text style={[styles.welcomeText, { color: COLORS.black, fontSize: 55 }]}>Find The Most</Text>
            <Text style={[styles.welcomeText, { color: COLORS.primary }]}>Luxurious Furniture</Text> */}
                <Text style={styles.welcomeText1}>Find The Most</Text>
                <Text style={styles.welcomeText2}>Luxurious Furniture</Text>
            </View>
        </View>
    );
};

export default Welcome;