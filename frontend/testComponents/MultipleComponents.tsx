import React from "react";
import { Text, View } from "react-native";

const MultipleComponents = () => {
    return(
        <View>
            <Text>I am also a Cat!</Text>
        </View>
    )
}

const Cafe = () => {
    return (
        <View>
            <Text>
                Welcome!
            </Text>
            <MultipleComponents/>
            <MultipleComponents/>
            <MultipleComponents/>
        </View>
    )
}

export default Cafe;