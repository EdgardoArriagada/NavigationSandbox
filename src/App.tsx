/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerNavigator} from './presentation/routes/DrawerNavigator';
import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;
