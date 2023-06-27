import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../../types/rootStackParams.type';
import Login from '../../screens/login';

const Stack = createNativeStackNavigator<RootStackParams>();

function AuthStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
