import { ScrollView, StyleSheet, View, Image, useWindowDimensions, Animated } from 'react-native'
import React from 'react';
import { SIZES } from '../../../themes/theme';

interface CarouselData {
    image: string;
}

// marginHorizontal gets passed from the Homescreen, for the right width for the carousel.
interface CarouselProps {
    data: CarouselData[],
    marginHorizontal: number
}

const Carousel = ({ data, marginHorizontal }: CarouselProps) => {
    const { width } = useWindowDimensions();
    const screenWidth = width - marginHorizontal * 2;
    const SIZE = screenWidth * 0.8;
    const SPACER = (screenWidth - SIZE) / 2;
    // track scroll position
    const scrollX = new Animated.Value(0);
    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            snapToInterval={SIZE}
            decelerationRate='fast'
            contentContainerStyle={styles.carouselContainer}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
            )}
        >
            {/* to insert a space on the left side */}
            <View style={{ width: SPACER }}></View>

            {/* to display the images from data array */}
            {data.map((item, index) => {
                const inputRange = [
                    (index - 1) * SIZE,
                    index * SIZE,
                    (index + 1) * SIZE
                ];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1, 0.8],
                    extrapolate: 'clamp'
                })
                return (
                    <View key={index} style={{ width: SIZE }}>
                        <Animated.View style={[styles.imageContainer, { transform: [{ scale }] }]} >
                            <Image
                                source={item.image as any}
                                style={styles.image}
                            />
                        </Animated.View>
                    </View>
                );
            })}

            {/* to insert a space on the right side */}
            <View style={{ width: SPACER }}></View>
        </Animated.ScrollView>
    );
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 34,
        // for container, to "overwrite"
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
})