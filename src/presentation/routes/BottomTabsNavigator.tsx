import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {colors} from '../theme';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import {Icon} from '../components/shared/Icon';
import {FC} from 'react';

const Tab = createBottomTabNavigator();

// https://ionic.io/ionicons
type IconProps = {
  color: string;
};

const AccessibilityIcon: FC<IconProps> = ({color}) => (
  <Icon name="accessibility-outline" color={color} />
);

const AirplaneIcon: FC<IconProps> = ({color}) => (
  <Icon name="airplane-outline" color={color} />
);

const BarChartOutline: FC<IconProps> = ({color}) => (
  <Icon name="bar-chart-outline" color={color} />
);

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
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
        options={{
          title: 'tab 1',
          tabBarIcon: AccessibilityIcon,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{title: 'tab 2', tabBarIcon: AirplaneIcon}}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{title: 'tab 2', tabBarIcon: BarChartOutline}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}
