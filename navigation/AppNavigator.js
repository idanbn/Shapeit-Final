import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';
import { StyleSheet } from 'react-native';



import LoginScreen from '../screens/LoginScreen';
import TabsNavigator from './tabs';
import UserInfoScreen from '../screens/UserInfoScreen';
import AdminScreen from '../screens/AdminScreen';



export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode='model'
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={"Login"}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="tabs" component={TabsNavigator} />
                <Stack.Screen name="userInfo" component={UserInfoScreen} />
                <Stack.Screen name="Admin" component={AdminScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});
