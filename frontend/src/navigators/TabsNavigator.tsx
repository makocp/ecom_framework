import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileView from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SearchScreen from "../screens/SearchScreen";


export type TabsStackParamList = {
    MainScreen: undefined;
    SearchScreen: undefined;
    ProfileScreen: undefined;
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
            <TabsStack.Screen name='MainScreen' component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                }
            }} />
            <TabsStack.Screen name='SearchScreen' component={SearchScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'search' : 'search-outline'} color={color} size={size} />
                },
                // tabBarBadge: 3
            }} />
            <TabsStack.Screen name='ProfileScreen' component={ProfileView} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
                }
            }} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator