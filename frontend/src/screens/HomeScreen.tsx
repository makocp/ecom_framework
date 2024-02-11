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

const HomeScreen = () => {
    const insets = useSafeAreaInsets();
    const data = [
        {image: require('../assets/images/sample_image_1.png')},
        {image: require('../assets/images/sample_image_2.png')},
        {image: require('../assets/images/sample_image_3.png')},
    ]

    return (
        <View style={{paddingBottom: insets.bottom, paddingTop: insets.top}}>
            <AppBar></AppBar>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContainerContent}>
                <Welcome/>
                <Carousel data={data}/>
                <Headings/>
                <SearchBarNavigation caretHidden={true}/>
                <ProductRow/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        height: '100%',
    },
    scrollContainerContent: {
        paddingBottom: '6%'
    }
});

export default HomeScreen;