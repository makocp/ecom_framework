import React from "react";
import { Text } from "react-native";

const getFullName = (
    firstName: string,
    secondName: string,
    thridName: string,
) => {
    return firstName + ' ' + secondName + ' ' + thridName;
}

const CurlyBraces = () => {
    return <Text>
        Hello, I am {getFullName('Rum', 'Tum', 'Tugger')}
    </Text>
}

export default CurlyBraces;