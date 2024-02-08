import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DetailScreen from '../screens/DetailScreen';
import {NavigatorScreenParams} from '@react-navigation/native';
import TabsNavigator, {TabsStackParamList} from './TabsNavigator';
import CartScreen from "../screens/CartScreen";
import {ProductData} from "../components/home/ProductRow";

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    DetailScreen: { product: ProductData };
    CartScreen: undefined;
}

const navigationOptions = {
    headerShown: false
}

const RootStack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
    return (
        <RootStack.Navigator
            initialRouteName={'TabsStack'}>
            <RootStack.Screen name='TabsStack' component={TabsNavigator} options={navigationOptions}/>
            <RootStack.Screen name='DetailScreen' component={DetailScreen} options={navigationOptions}/>
            <RootStack.Screen name={'CartScreen'} component={CartScreen} options={navigationOptions}/>
        </RootStack.Navigator>
    )
}

export default RootNavigator 