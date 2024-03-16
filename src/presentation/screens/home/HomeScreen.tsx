import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {gs} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...gs.container,
        ...s.container,
      }}>
      <PrimaryButton onPress={() => navigation.navigate('Products' as never)}>
        Products
      </PrimaryButton>

      <PrimaryButton onPress={() => navigation.navigate('Settings' as never)}>
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
