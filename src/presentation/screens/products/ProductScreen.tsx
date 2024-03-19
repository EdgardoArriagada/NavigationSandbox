import {useRoute} from '@react-navigation/native';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {useAppRoute} from '../../hooks/shared/useAppNavigation';
import {gs} from '../../theme';

export const ProductScreen: FC = () => {
  const {params} = useAppRoute<'Product'>();

  return (
    <View style={gs.container}>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
