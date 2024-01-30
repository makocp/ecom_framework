import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../themes/theme";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.small,
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
    },
    searchContainer: {
        marginHorizontal: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
    },
    searchIconWrapper: {
        height: '100%',
        justifyContent: 'center',
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: 'regular',
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    searchBtnIcon: {
        color: COLORS.white
    }
});

export default styles;