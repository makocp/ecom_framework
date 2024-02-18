import {StyleSheet} from 'react-native';
import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {useFocusEffect} from "@react-navigation/native";

type FadeInScreenProps = {
    children?: any,
    duration?: number
}
const FadeInScreen = ({children, duration}: FadeInScreenProps) => {
    const fadeAnim = useRef(new Animated.Value(0.7)).current;

    useFocusEffect(
        React.useCallback(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: duration || 100,
                useNativeDriver: true,
            }).start();

            // sets the opacity again at 0.7 by blur (onfocus) the screen
            // added here a delay, because, if navigating to DetailScreen, to don't interfere with the already existing stacknavigation animation (swipe left/right).
            return () => {
                const timeoutId = setTimeout(() => {
                   fadeAnim.setValue(0.7);
                }, 100);

                return () => clearTimeout(timeoutId);
            };
        }, [fadeAnim])
    )
    return (
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
            {children}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FadeInScreen;