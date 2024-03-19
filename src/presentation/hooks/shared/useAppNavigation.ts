import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/StackNavigator';

export const useAppNavigation = (): NavigationProp<RootStackParamList> =>
  useNavigation<NavigationProp<RootStackParamList>>();
