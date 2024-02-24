import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import {COLORS} from "../themes/theme";

const LoadingScreen = () => {
    return (
        <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoadingScreen;
