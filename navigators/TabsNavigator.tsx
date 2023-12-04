import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainView from '../ui/MainView';
import CartView from '../ui/CartView';
import ProfileView from '../ui/ProfileView';

export type TabsStackParamList = {
    MainView: undefined;
    CartView: undefined;
    ProfileView: undefined;
}

const navigationOptions = {
    // tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
}


const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator>
            <TabsStack.Screen name='MainView' component={MainView} options={navigationOptions} />
            <TabsStack.Screen name='CartView' component={CartView} options={navigationOptions} />
            <TabsStack.Screen name='ProfileView' component={ProfileView} options={navigationOptions} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator