import { View, Text, Alert } from 'react-native'
import React from 'react'

const MainView = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >MainView</Text>
        </View>
    )
}

export default MainView