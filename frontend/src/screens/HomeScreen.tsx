import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Welcome from '../components/home/Welcome';
import Carousel from '../components/home/Carousel';
import AppBar from "../components/home/AppBar";
import SearchBarNavigation from "../components/home/SearchBarNavigation";
import Headings from "../components/home/Headings";
import ProductRow from "../components/home/ProductRow";
import FadeInScreen from "./FadeInScreen";
import useCleanToastsOnUnfocus from "../hooks/useCleanToastsOnUnfocus";
import {useUserData} from "../providers/UserData/UserProvider";
import {mockUsers} from "../data/mockData";
import {ILoginProps, IMockImage} from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./LoadingScreen";
import BottomSheet from "@gorhom/bottom-sheet";
import ShippingInfoBottomSheet from "../components/bottomsheets/ShippingInfoBottomSheet";
import LoginBottomSheet from "../components/bottomsheets/LoginBottomSheet";

const HomeScreen = () => {
    useCleanToastsOnUnfocus();
    const {login, userData, logout, isLoadingUserData} = useUserData();

    console.log('testrender')

    const data: IMockImage[] = [
        {image: require('../assets/images/sample_image_1.png')},
        {image: require('../assets/images/sample_image_2.png')},
        {image: require('../assets/images/sample_image_3.png')},
    ];

    // todo:
    // implement here for inputfield state onpress, for now only demo login.
    const loginProps: ILoginProps =
        {
            email: 'mako.cp@ecom.com',
            password: 'passwordEcom1'
        };


    const insets = useSafeAreaInsets();


    const shippingBottomSheetRef = useRef<BottomSheet>(null);
    const loginBottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = ['1%', '100%']

    const openShippingBottomSheet = () => {
        shippingBottomSheetRef.current?.expand();
    };

    const openLoginBottomSheet = () => {
        loginBottomSheetRef.current?.expand();
    };

    return (
        <FadeInScreen>
            <View style={{marginBottom: insets.bottom, paddingTop: insets.top}}>
                <AppBar screenName={'Home'} openShippingBottomSheet={openShippingBottomSheet} openLoginBottomSheet={openLoginBottomSheet}></AppBar>
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.scrollContainerContent}
                    showsVerticalScrollIndicator={false}
                >
                    <Welcome/>
                    <Carousel data={data}/>
                    <Headings/>
                    <SearchBarNavigation/>
                    <ProductRow/>
                </ScrollView>
                <BottomSheet
                    ref={shippingBottomSheetRef}
                    snapPoints={snapPoints}
                    index={-1}
                >
                    <ShippingInfoBottomSheet/>
                </BottomSheet>

                <BottomSheet
                    ref={loginBottomSheetRef}
                    snapPoints={snapPoints}
                    index={-1}
                >
                    <LoginBottomSheet/>
                </BottomSheet>
            </View>
        </FadeInScreen>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        height: '100%',
    },
    scrollContainerContent: {
        paddingBottom: '12%',
    }
});

export default HomeScreen;