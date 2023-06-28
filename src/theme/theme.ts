import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F58220',
    background: '#ffffff',
    text: '#000000',
  },
};

const darkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F58220',
    background: '#000000',
    text: '#ffffff',
  },
};

export {lightTheme, darkTheme};
