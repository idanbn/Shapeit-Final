import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';
import { StyleSheet } from 'react-native';


import LoginScreen from './screens/LoginScreen';
import TabsNavigator from './navigation/tabs';
import AppNavigator from './navigation/AppNavigator';

export default function App() {

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({

});
