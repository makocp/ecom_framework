import { View, Text } from 'react-native';
import React from 'react';
import styles from './home.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={24} />
                    <Text style={styles.location}>Graz, Austria</Text>
                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>3</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name='cart-outline' size={24} />
                            {/* <Ionicons name='bag-check-outline' size={24} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;