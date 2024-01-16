import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../../../themes/theme';

const Welcome = () => {
    return (
        <View>
            {/* Welcome Text */}
            <View style={styles.container}>
                <Text style={styles.welcomeText1}>Find The Most</Text>
                <Text style={styles.welcomeText2}>Luxurious Furniture</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <TouchableOpacity style={styles.searchIconWrapper}>
                    <Ionicons name='search' size={24} style={styles.searchIcon}></Ionicons>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => {}}
                        placeholder='What are you looking for?'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name='camera-outline' size={SIZES.xLarge} style={styles.searchBtnIcon}/>
                    </TouchableOpacity>
                </View>

            </View>


            {/* Products */}
        </View>
    );
};

export default Welcome;