import {useFocusEffect} from "@react-navigation/native";
import React from "react";
import Toast from "react-native-toast-message";

const useCleanToastsOnUnfocus = () => {
    useFocusEffect(
        React.useCallback(() => {
            return () => Toast.hide(); // Hide toast when the screen loses focus
        }, [])
    );
};

export default useCleanToastsOnUnfocus;