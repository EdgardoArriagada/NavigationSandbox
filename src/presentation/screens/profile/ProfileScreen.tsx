import {FC} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useAppNavigation} from '../../hooks/shared/useAppNavigation';
import {DrawerActions} from '@react-navigation/native';

export const ProfileScreen: FC = () => {
  const {top} = useSafeAreaInsets();
  const {dispatch} = useAppNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 20,
      }}>
      <Text>ProfileScreen</Text>

      <PrimaryButton onPress={() => dispatch(DrawerActions.openDrawer())}>
        Abrir Menu
      </PrimaryButton>
    </View>
  );
};
