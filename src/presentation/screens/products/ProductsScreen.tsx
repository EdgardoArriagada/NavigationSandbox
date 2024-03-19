import {FC} from 'react';
import {gs} from '../../theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {Text, View} from 'react-native';
import {useAppNavigation} from '../../hooks/shared/useAppNavigation';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
];

export const ProductsScreen: FC = () => {
  const {navigate} = useAppNavigation();

  return (
    <View style={gs.container}>
      <Text style={gs.h2}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            style={{
              marginBottom: 10,
            }}
            onPress={() => navigate('Product', item)}>
            {item.name}
          </PrimaryButton>
        )}
      />

      <Text style={gs.h2}>Ajustes</Text>
      <PrimaryButton onPress={() => navigate('Settings')}>
        Ajustes
      </PrimaryButton>
    </View>
  );
};
