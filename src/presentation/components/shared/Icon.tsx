import {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export const Icon: FC<Props> = ({size = 20, color = 'black', ...rest}) => (
  <Ionicons size={size} color={color} {...rest} />
);
