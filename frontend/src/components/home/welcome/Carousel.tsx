import { ScrollView, StyleSheet, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

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
    const SIZE = screenWidth * 0.7;
    const SPACER = (screenWidth - SIZE) / 2;
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            snapToInterval={SIZE}
            decelerationRate='fast'
            contentContainerStyle={styles.carouselContainer}
        >
            <View style={{ width: SPACER }}></View>
            {data.map((item, index) => (
                <View style={{ width: SIZE }}>
                    <View style={styles.imageContainer} >
                        <Image
                            key={index}
                            source={item.image as any}
                            style={styles.image}
                        />
                    </View>
                </View>
            ))}
            <View style={{ width: SPACER }}></View>
        </ScrollView>
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