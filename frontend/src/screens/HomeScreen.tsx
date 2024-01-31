import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import Welcome from '../components/home/Welcome';
import Carousel from '../components/home/Carousel';
import AppBar from "../components/home/AppBar";
import SearchBar from "../components/home/SearchBar";
import Headings from "../components/home/Headings";
import ProductRow from "../components/home/ProductRow";

const HomeScreen = () => {
    const data = [
        {image: require('../assets/images/sample_image_1.png')},
        {image: require('../assets/images/sample_image_2.png')},
        {image: require('../assets/images/sample_image_3.png')},
    ]

    return (
        <SafeAreaView>
            <AppBar></AppBar>
            <ScrollView style={styles.scrollContainer}>
                <Welcome/>
                <SearchBar/>
                <Carousel data={data}/>
                <Headings/>
                <ProductRow/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        height: '100%'
    }
});

export default HomeScreen;