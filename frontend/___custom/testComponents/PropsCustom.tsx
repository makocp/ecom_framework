import React from "react";
import { Text, View, Image } from "react-native";

const PropsCustom = () => {
    return (
        <View>
            <Image
            // double {{}}
            // first -> expression in JSX
            // second -> JS object
                source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
                style={{ width: 200, height: 200 }}
            // self closing tag -> not typed to receive children!
            />
            <Text>Hello, I am your cat!</Text>
        </View>
    )
}

export default PropsCustom;