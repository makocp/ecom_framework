import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainView from '../ui/MainView';
import CartView from '../ui/CartView';
import ProfileView from '../ui/ProfileView';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'


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


// alternative: options can be extracted.
// type TabIconProps = {
//     focused: boolean
//     color: string
//     size: number
// }

// const tabOptions = (name: string) => ({
//     tabBarLabel: name,
//     tabBarIcon: ({ focused, color, size }: TabIconProps) => (
//         <MaterialCommunityIcon
//             name={focused ? name : name + "-outline"}
//             color={color}
//             size={size} />
//     ),
// });

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={screenOptionsAll}>
            <TabsStack.Screen name='MainView' component={MainView} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <MaterialCommunityIcon name={focused ? 'shopping' : 'shopping-outline'} color={color} size={size} />
                }
            }} />
            <TabsStack.Screen name='CartView' component={CartView} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <MaterialCommunityIcon name={focused ? 'cart' : 'cart-outline'} color={color} size={size} />
                },
                // tabBarBadge: 3
            }} />
            <TabsStack.Screen name='ProfileView' component={ProfileView} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <MaterialCommunityIcon name={focused ? 'account' : 'account-outline'} color={color} size={size} />
                }
            }} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator