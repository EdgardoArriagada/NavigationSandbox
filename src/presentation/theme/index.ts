import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#7037eb',
  primaryText: '#ffffff',
  secondary: '#f72585',
  teritary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#ffffff',
};

export const gs = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },

  buttonPressed: {
    opacity: 0.92,
  },

  buttonText: {
    color: colors.background,
    fontSize: 18,
  },

  h2: {
    fontSize: 30,
    marginBottom: 10,
  },
});
