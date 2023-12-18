import React, { useState } from "react";
import { Button, View, Text } from "react-native";

// State gives components memory!

// Prop -> when component renders
// State -> when component changes over time

// Hook -> use to isolate reusable part from a functional component
// DOM -> document object model

type CatProps = {
    name: string;
}

const Cat = (props: CatProps) => {
    // call setIsHungry -> component rerenders.
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
                onPress={() => {
                    setIsHungry(false)
                }}
                disabled={!isHungry}
                title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
            />
        </View>
    )
}

const State = () => {
    return (
        // fragment
        <>
            <Cat name="Munkustrap"></Cat>
            <Cat name="Spot"></Cat>
        </>
    )
}

export default State;