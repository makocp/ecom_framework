import React from "react";
import { Text, View } from "react-native";

type CatProps = {
    name: string;
};

const Cat = (props: CatProps) => {
    return(
        <View>
            <Text>Hello, I am {props.name}!</Text>
        </View>
    )
}

const Props = () => {
    return (
        <View>
            <Cat name="Maru" ></Cat>
            <Cat name="Jellylorum" ></Cat>
            <Cat name="Spot" ></Cat>
        </View>
    )
}

export default Props;