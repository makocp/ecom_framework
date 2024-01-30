import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, SIZES} from "../../themes/theme";

const AppBar = () => {
  return (
      <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
              <Ionicons name='location-outline' size={24} />
              <Text style={styles.location}>Graz, Austria</Text>
              <View style={{ alignItems: 'flex-end' }}>
                  <View style={styles.cartCount}>
                      <Text style={styles.cartNumber}>3</Text>
                  </View>
                  <Pressable>
                      <Ionicons name='cart' size={24} />
                      {/* <Ionicons name='bag-check-outline' size={24} /> */}
                  </Pressable>
              </View>
          </View>
      </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    appBarWrapper: {
        marginHorizontal: SIZES.large,
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
