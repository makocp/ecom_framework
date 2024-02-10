import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";
import {useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabsStackParamList} from "../../navigators/TabsNavigator";

type AllProductsScreenNavigationProp = BottomTabNavigationProp<TabsStackParamList, 'AllProductsScreen'>;
const Headings = () => {
    const navigation = useNavigation<AllProductsScreenNavigationProp>();

    const navigateToAllProductsScreen = () => {
        navigation.navigate('AllProductsScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Top Seller</Text>
                <TouchableOpacity style={styles.allProducts} onPress={navigateToAllProductsScreen}>
                    <Ionicons name={'grid'} size={24} color={COLORS.primary}/>
                    <Text style={styles.allProcuctsText}>View All</Text>
                    <Ionicons name={'arrow-forward'} size={16}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Headings;

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        // marginBottom: -SIZES.xSmall
        marginHorizontal: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: SIZES.xLarge - 2
    },
    allProducts: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6
    },
    allProcuctsText: {
        color: COLORS.primary,
        fontWeight: 'bold'
    }
});