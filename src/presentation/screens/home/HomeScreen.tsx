import {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {gs} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const HomeScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={gs.container}>
      <PrimaryButton onPress={() => navigation.navigate('Products' as never)}>
        Products
      </PrimaryButton>

      <PrimaryButton onPress={() => navigation.navigate('Settings' as never)}>
        Settings
      </PrimaryButton>
    </View>
  );
};
