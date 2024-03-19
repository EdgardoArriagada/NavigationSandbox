import {FC, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {gs} from '../../theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useAppNavigation} from '../../hooks/shared/useAppNavigation';
import {DrawerActions} from '@react-navigation/native';

const HeaderLeft: FC = () => {
  const {dispatch} = useAppNavigation();

  return (
    <Pressable onPress={() => dispatch(DrawerActions.openDrawer())}>
      <Text>Menu</Text>
    </Pressable>
  );
};

export const HomeScreen: FC = () => {
  const {navigate, setOptions} = useAppNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: HeaderLeft,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        ...gs.container,
        ...s.container,
      }}>
      <PrimaryButton onPress={() => navigate('Products')}>
        Products
      </PrimaryButton>

      <PrimaryButton onPress={() => navigate('Settings')}>
        Settings
      </PrimaryButton>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    gap: 20,
  },
});
