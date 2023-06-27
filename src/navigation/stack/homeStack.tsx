import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParams} from '../../types/rootStackParams.type';
import Home from '../../screens/home';

const Stack = createNativeStackNavigator<RootStackParams>();

function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeStack;
