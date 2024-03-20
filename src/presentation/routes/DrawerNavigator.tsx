import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {colors} from '../theme';
import { BottomTabsNavigator } from './BottomTabsNavigator';

export type RootDrawerParamList = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        /* headerShown: false, */

        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.primaryText,
        drawerInactiveTintColor: colors.primary,
        drawerInactiveBackgroundColor: colors.background,
        /* drawerItemStyle: { */
        /*   borderRadius: 100, */
        /*   marginVertical: 10, */
        /* }, */
      }}>
      <Drawer.Screen name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
