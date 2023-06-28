import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch} from '../../utils/hooks/reduxHook';
import {increment} from '../../feature/slices/counterSlice';
import {useTheme} from '@react-navigation/native';
import style from './style';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  function handlePress() {
    dispatch(increment());
  }
  return (
    <View style={[style.container]}>
      <Text style={{color: theme.colors.text}}>Login</Text>
      <Button title="Count" onPress={handlePress} />
    </View>
  );
}

export default Login;
