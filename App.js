import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React } from 'react';
import { StyleSheet} from 'react-native';


import LoginScreen from './screens/LoginScreen';
import TabsNavigator from './navigation/tabs';

export default function App() {
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

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
