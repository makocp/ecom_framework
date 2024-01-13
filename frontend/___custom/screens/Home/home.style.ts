import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../themes/theme";

const styles = StyleSheet.create({
    scrollContainer: {
        marginHorizontal: 10
    },
    textStyle: {
        fontFamily: 'bold',
        fontSize: 20
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location: {
        fontWeight: 'bold',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: 'regular',
        fontWeight: '600',
        fontSize: 10,
        color: COLORS.lightWhite
    }
});

export default styles;