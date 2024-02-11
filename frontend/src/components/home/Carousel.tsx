import {StyleSheet, View, Image, useWindowDimensions, Animated, ScrollView} from 'react-native'
import React, {useEffect, useRef, useState} from 'react';

interface CarouselData {
    image: string;
}

// marginHorizontal gets passed from the Homescreen, for the right width for the carousel.
interface CarouselProps {
    data: CarouselData[]
}

const Carousel = ({data}: CarouselProps) => {
    // Reference for the ScrollView
    const scrollViewRef = useRef<ScrollView>(null);

    // Current index state
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= data.length) {
                nextIndex = 0;
            }

            // Scroll to the next item
            scrollViewRef.current?.scrollTo({
                x: nextIndex * SIZE,
                animated: true
            });

            setCurrentIndex(nextIndex);
        }, 3000);

        // Clear the interval on unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    const {width} = useWindowDimensions();
    const screenWidth = width;
    const SIZE = screenWidth * 0.95;
    const SPACER = (screenWidth - SIZE) / 2;
    // track scroll position
    const scrollX = new Animated.Value(0);
    return (
        <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            snapToInterval={SIZE}
            decelerationRate='fast'
            contentContainerStyle={styles.carouselContainer}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
            )}
        >
            {/* to insert a space on the left side */}
            <View style={{width: SPACER}}></View>

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
                    <View key={index} style={{width: SIZE}}>
                        <Animated.View style={[styles.imageContainer, {transform: [{scale}]}]}>
                            <Image
                                source={item.image as any}
                                style={styles.image}
                            />
                        </Animated.View>
                    </View>
                );
            })}

            {/* to insert a space on the right side */}
            <View style={{width: SPACER}}></View>
        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 20,
        // for container, to "overwrite"
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 16 / 9
    }
})

export default Carousel