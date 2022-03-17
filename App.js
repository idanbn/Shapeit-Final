import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Login" component={LoginScreen} />
     <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
