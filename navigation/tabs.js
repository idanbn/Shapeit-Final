import { React } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Svg, { Path } from 'react-native-svg';
import Foundation from 'react-native-vector-icons/Foundation'

import HomeScreen from '../screens/HomeScreen';
import MealsScreen from '../screens/MealsScreen';
import TestScreen from '../screens/TestScreen';

import { COLORS, icons } from '../constants';
import StatisticsScreen from '../screens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const TabsNavigator = () => {
    return (
        <Tab.Navigator
            style={styles.container}
            screenOptions={{
                headerShown: false
            }}
        >

            <Tab.Screen
                name="Test"
                component={TestScreen}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => (

                        <Foundation
                            name='home'
                            color={focused ? COLORS.primary : COLORS.secondary}
                            style={{
                                fontSize: 34,


                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Statistics"
                component={StatisticsScreen}
                options={{
                    tabBarShowLabel: false,

                    tabBarIcon: ({ focused }) => (

                        <Foundation
                            name='graph-bar'
                            color={focused ? COLORS.primary : COLORS.secondary}
                            style={{
                                fontSize: 32,


                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
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
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />



        </Tab.Navigator>
    )

}

export default TabsNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
