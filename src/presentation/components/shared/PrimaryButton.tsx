import {FC, ComponentProps} from 'react';
import {Pressable, Text} from 'react-native';
import {gs} from '../../theme';

type Props = Omit<ComponentProps<typeof Pressable>, 'style'>;

export const PrimaryButton: FC<Props> = props => {
  const children = props.children || 'Button';

  return (
    <Pressable
      {...props}
      style={({pressed}) => [gs.primaryButton, pressed && gs.buttonPressed]}>
      {typeof children === 'string' ? (
        <Text style={gs.buttonText}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
