/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './presentation/routes/StackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Text>Test</Text>
    </NavigationContainer>
  );
}

export default App;
