import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {colors} from '../theme';
import {TopTabsNavigator} from './TopTabsNavigator';

const Tab = createBottomTabNavigator();

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{title: 'tab 1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{title: 'tab 2'}}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{title: 'tab 2'}}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
}
