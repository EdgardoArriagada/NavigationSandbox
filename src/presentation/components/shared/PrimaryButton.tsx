import {FC, ComponentProps} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {gs} from '../../theme';

type Props = ComponentProps<typeof Pressable> & {
  style: StyleProp<ViewStyle>;
};

export const PrimaryButton: FC<Props> = ({style, ...props}) => {
  const children = props.children || 'Button';

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        gs.primaryButton,
        style,
        pressed && gs.buttonPressed,
      ]}>
      {typeof children === 'string' ? (
        <Text style={gs.buttonText}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
};
