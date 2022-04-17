import { React, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { Store } from './redux/store';
import AppNavigator from './navigation/AppNavigator';

import * as Font from 'expo-font';
import useFonts from './assets/fonts/useFonts';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }


  return (
    <Provider store={Store} >
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
