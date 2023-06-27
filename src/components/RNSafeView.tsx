import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

type Props = {
  children: React.ReactNode;
};

function RNSafeView({children}: Props): JSX.Element {
  return <SafeAreaView style={style.container}>{children}</SafeAreaView>;
}

export default RNSafeView;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
