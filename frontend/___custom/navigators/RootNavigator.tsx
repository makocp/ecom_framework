import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileView from '../screens/ProfileScreen';
import DetailScreen from '../screens/DetailScreen';
import { NavigatorScreenParams } from '@react-navigation/native';
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  DetailView: undefined;
}

const navigationOptions = {
  headerShown: false
}

const RootStack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='TabsStack' component={TabsNavigator} options={navigationOptions} />
      <RootStack.Screen name='DetailView' component={DetailScreen} options={navigationOptions} />
    </RootStack.Navigator>
  )
}

export default RootNavigator 