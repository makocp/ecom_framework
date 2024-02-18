import {Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');
export const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    width,
    height
};

export const COLORS = {
    primary: "#003366", // Deep Ocean Blue
    secondary: "#E1F0FF", // Soft Sky Blue
    tertiary: "#FF6347", // Tomato

    gray: "#83829A",
    gray2: "#C1C0C8",

    offwhite: "#F3F4F8",
    white: "#FFFFFF",
    black: "#000000",
    red: "#e81e4d",
    green: " #00C135",
    lightWhite: "#FAFAFC",
};

export const SHADOWS = {
    small: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0.5,
        elevation: 2,
    },
    medium: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
};