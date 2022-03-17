import { React } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen';
import MealsScreen from '../screens/MealsScreen';
import SearchScreen from '../screens/SearchScreen';

import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Meals"
                component={MealsScreen}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />



        </Tab.Navigator>
    )

}

export default Tabs;