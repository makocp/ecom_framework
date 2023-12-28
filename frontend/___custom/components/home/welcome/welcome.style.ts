import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    welcomeText1: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        marginTop: SIZES.xSmall,
        color: COLORS.black,
        marginHorizontal: 6
    },
    welcomeText2: {
        fontWeight: 'bold',
        fontSize: SIZES.xxLarge -6,
        marginTop: 0,
        color: COLORS.primary,
        marginHorizontal: 6
    }
});

export default styles;