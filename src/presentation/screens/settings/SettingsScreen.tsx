import {FC} from 'react';
import {Text, View} from 'react-native';
import {gs} from '../../theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {useAppNavigation} from '../../hooks/shared/useAppNavigation';
import {StackActions} from '@react-navigation/native';

export const SettingsScreen: FC = () => {
  const {goBack, dispatch} = useAppNavigation();

  return (
    <View style={gs.container}>
      <Text>Settings Screen</Text>
      <PrimaryButton onPress={goBack}>Regresar</PrimaryButton>
      <PrimaryButton onPress={() => dispatch(StackActions.popToTop())}>
        Go Home
      </PrimaryButton>
    </View>
  );
};
