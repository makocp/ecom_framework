import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './home.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Welcome from '../../components/home/welcome/Welcome';
import Carousel from '../../components/home/welcome/Carousel';

const HomeScreen = () => {
    const data = [
        { image: require('../../assets/images/sample_image_1.png') },
        { image: require('../../assets/images/sample_image_2.png') },
        { image: require('../../assets/images/sample_image_3.png') },
    ]

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
                        <Pressable>
                            <Ionicons name='cart' size={24} />
                            {/* <Ionicons name='bag-check-outline' size={24} /> */}
                        </Pressable>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <Welcome />
                <Carousel data={data} marginHorizontal={styles.scrollContainer.marginHorizontal}/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;