import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';
import { StyleSheet } from 'react-native';



import LoginScreen from '../screens/LoginScreen';
import TabsNavigator from './tabs';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import UserInfoScreen from '../screens/UserInfoScreen';



export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Login"}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="tabs" component={TabsNavigator} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="Statistics" component={StatisticsScreen} />
                <Stack.Screen name="userInfo" component={UserInfoScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
