import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileView from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CartScreen from "../screens/CartScreen";
import AllProductsScreen from "../screens/AllProductsScreen";


export type TabsStackParamList = {
    MainScreen: undefined;
    SearchScreen: undefined;
    ProfileScreen: undefined;
    CartScreen: undefined;
    AllProductsScreen: { isFromSearch: boolean, isAnimationEnabled: boolean };
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
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
                }
            }}/>
            <TabsStack.Screen name={'AllProductsScreen'} component={AllProductsScreen} options={{
                tabBarIcon: ({size, focused, color}) => {
                    return <Ionicons name={focused ? 'grid' : 'grid-outline'} size={size - 2} color={color}/>
                }
            }}/>
            <TabsStack.Screen name='CartScreen' component={CartScreen} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={size}/>
                }
            }}/>
            <TabsStack.Screen name='ProfileScreen' component={ProfileView} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size}/>
                }
            }}/>
        </TabsStack.Navigator>
    )
}

export default TabsNavigator