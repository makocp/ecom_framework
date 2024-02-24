import {StyleSheet, View} from 'react-native';
import React from 'react';
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
import {MockImage} from "../types/types";

const HomeScreen = () => {
    useCleanToastsOnUnfocus();

    const insets = useSafeAreaInsets();
    const data: MockImage[] = [
        {image: require('../assets/images/sample_image_1.png')},
        {image: require('../assets/images/sample_image_2.png')},
        {image: require('../assets/images/sample_image_3.png')},
    ];


    return (
        <FadeInScreen>
            <View style={{paddingBottom: insets.bottom, paddingTop: insets.top}}>
                <AppBar screenName={'Home'}></AppBar>
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