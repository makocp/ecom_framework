import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import FadeInScreen from "./FadeInScreen";

const ProfileView = () => {
    return (
        <FadeInScreen>
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text
                    style={{fontSize: 26, fontWeight: 'bold'}}
                >ProfileView</Text>
            </View>
        </FadeInScreen>
    )
}

export default ProfileView

const styles = StyleSheet.create({})