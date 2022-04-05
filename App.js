import { React } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { Store } from './redux/store';
import AppNavigator from './navigation/AppNavigator';

export default function App() {

  return (
    <Provider store={Store} >
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
