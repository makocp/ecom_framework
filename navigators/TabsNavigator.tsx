import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainView from '../ui/MainView';
import CartView from '../ui/CartView';
import ProfileView from '../ui/ProfileView';
import Icon from 'react-native-vector-icons/MaterialIcons'


export type TabsStackParamList = {
    MainView: undefined;
    CartView: undefined;
    ProfileView: undefined;
}

// if assigned to the Navigator, the options are applied to all sub screens.
const screenOptionsAll = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={screenOptionsAll}>
            <TabsStack.Screen name='MainView' component={MainView} options={{
                tabBarIcon(props) {
                    return <Icon name='home'/>
                },
            }}/>
            <TabsStack.Screen name='CartView' component={CartView} />
            <TabsStack.Screen name='ProfileView' component={ProfileView} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator