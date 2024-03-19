import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {gs} from '../../theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useAppNavigation} from '../../hooks/shared/useAppNavigation';

export const HomeScreen: FC = () => {
  const {navigate} = useAppNavigation();

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
