import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainView from '../ui/MainView';
import CartView from '../ui/CartView';
import ProfileView from '../ui/ProfileView';
import DetailView from '../ui/DetailView';
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
      <RootStack.Screen name='DetailView' component={DetailView} options={navigationOptions} />
    </RootStack.Navigator>
  )
}

export default RootNavigator 