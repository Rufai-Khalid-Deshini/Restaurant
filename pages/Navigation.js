import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import Home from './Home';
import Stores from './Stores';
import Order from './Order';
import Profile from './Profile';
import Delivery from './Delivery';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackGroup() {
    return (
        <Stack.Navigator screenOptions={({route, navigation}) =>
            ({headerShown: false})
        }>
            <Stack.Screen name='Homes' component={Home} />
            <Stack.Screen name='Delivery' component={Delivery} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator screenOptions={({route, navigation})=>
            ({headerShown: false,
            tabBarIcon: ({color, size, focused}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? "home" : "home-outline"
                }else if(route.name === "Stores"){
                    return <FontAwesome5 name="store" size={size} color={color} />
                }else if(route.name === "Order"){
                    return <MaterialCommunityIcons name="format-list-text" size={size} color={color} />
                }else if(route.name === "Profile"){
                    iconName = focused ? "person-circle" : "person-circle-outline"
                }

                return <Ionicons name={iconName} color={color} size={size} />
            }
            })}
        >
            <Tab.Screen name='Home' component={StackGroup} />
            <Tab.Screen name='Stores' component={Stores} />
            <Tab.Screen name='Order' component={Order} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default function Navigation() {

  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  )
}