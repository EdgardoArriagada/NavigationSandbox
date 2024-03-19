import {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  useAppNavigation,
  useAppRoute,
} from '../../hooks/shared/useAppNavigation';
import {gs} from '../../theme';

export const ProductScreen: FC = () => {
  const {params} = useAppRoute<'Product'>();
  const {setOptions} = useAppNavigation();

  useEffect(() => {
    setOptions({
      title: params.name,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
