import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/StackNavigator';

export const useAppNavigation = (): NavigationProp<RootStackParamList> =>
  useNavigation<NavigationProp<RootStackParamList>>();

export const useAppRoute = <T extends keyof RootStackParamList>(): RouteProp<
  RootStackParamList,
  T
> => useRoute<RouteProp<RootStackParamList, T>>();
