import { View, Text, Alert } from 'react-native'
import React from 'react'

const DetailView = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }}
            >DetailView</Text>
        </View>
    )
}

export default DetailView