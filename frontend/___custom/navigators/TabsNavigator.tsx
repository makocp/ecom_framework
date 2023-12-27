import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import CartScreen from '../screens/Cart/CartScreen';
import ProfileView from '../screens/Profile/ProfileScreen';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


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
            <TabsStack.Screen name='MainView' component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                }
            }} />
            <TabsStack.Screen name='CartView' component={CartScreen} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={size} />
                },
                // tabBarBadge: 3
            }} />
            <TabsStack.Screen name='ProfileView' component={ProfileView} options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />
                }
            }} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator