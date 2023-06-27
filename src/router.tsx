import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './navigation/stack/authStack';
import HomeStack from './navigation/stack/homeStack';

function Router(): JSX.Element {
  const isLogin: boolean = true;
  return <NavigationContainer>{handleNavigation(isLogin)}</NavigationContainer>;
}

function handleNavigation(isLogin: boolean): JSX.Element {
  return isLogin ? <AuthStack /> : <HomeStack />;
}

export default Router;
