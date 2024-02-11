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
                duration: duration ? duration : 100,
                useNativeDriver: true,
            }).start();

            return () => fadeAnim.setValue(0.7);
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