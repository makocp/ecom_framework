import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AllProductsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>AllProductsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default AllProductsScreen;