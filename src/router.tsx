import {NavigationContainer, Theme} from '@react-navigation/native';
import React from 'react';
import AuthStack from './navigation/stack/authStack';
import HomeStack from './navigation/stack/homeStack';
import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from './theme/theme';

function Router(): JSX.Element {
  const isLogin: boolean = true;
  const isDark = useColorScheme();
  const selectedTheme: Theme = isDark === 'dark' ? darkTheme : lightTheme;
  return (
    <NavigationContainer theme={selectedTheme}>
      {handleNavigation(isLogin)}
    </NavigationContainer>
  );
}

function handleNavigation(isLogin: boolean): JSX.Element {
  return isLogin ? <AuthStack /> : <HomeStack />;
}

export default Router;
