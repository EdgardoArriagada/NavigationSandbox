import {FC} from 'react';
import {gs} from '../../theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {Text, View} from 'react-native';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
  {id: 6, name: 'Product 6'},
];

export const ProductsScreen: FC = () => {
  return (
    <View style={gs.container}>
      <Text>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            style={{
              marginBottom: 10,
            }}
            onPress={() => console.log('Pressed')}>
            {item.name}
          </PrimaryButton>
        )}
      />

      <Text>Ajustes</Text>
      <PrimaryButton onPress={() => console.log('Pressed')}>
        Ajustes
      </PrimaryButton>
    </View>
  );
};
