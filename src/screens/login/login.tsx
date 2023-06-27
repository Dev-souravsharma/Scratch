import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch} from '../../utils/hooks/reduxHook';
import {increment} from '../../feature/slices/counterSlice';

function Login(): JSX.Element {
  console.log('Hello');
  const dispatch = useAppDispatch();

  function handlePress() {
    dispatch(increment());
  }
  return (
    <View>
      <Text>Login</Text>
      <Button title="Count" onPress={handlePress} />
    </View>
  );
}

export default Login;
