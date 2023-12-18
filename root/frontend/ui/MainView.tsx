import { View, Text, Alert } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'

const MainView = () => {
    // return (
    //     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //         <Text
    //             style={{ fontSize: 26, fontWeight: 'bold' }}
    //         >MainView</Text>
    //     </View>
    // )

    return (
        <ScrollView>
            <SafeAreaView>
                <Text>MainView!</Text>
                <Icon name='arrow-right-alt'/>
            </SafeAreaView>
        </ScrollView>
    )
}

export default MainView