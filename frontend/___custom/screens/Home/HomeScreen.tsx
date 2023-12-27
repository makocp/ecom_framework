import { View, Text } from 'react-native';
import React from 'react';
import styles from './home.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <Text style={styles.textStyle}>Sample.</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;