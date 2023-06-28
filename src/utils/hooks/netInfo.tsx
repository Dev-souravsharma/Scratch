import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import RNButton from '../../components/RNButton';
import COLORS from '../../theme/colors';

function ConnectionInfo(): JSX.Element {
  const [isConnected, setConnected] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setConnected(state.isConnected ?? true);
    });

    return unsubscribe();
  }, []);

  function handleRefresh() {
    NetInfo.refresh().then((state: NetInfoState) => {
      setConnected(state.isConnected ?? true);
    });
  }

  return (
    <Modal visible={!isConnected}>
      <View style={style.container}>
        <Text style={style.text}>{'No internet connection !'}</Text>
        <Text style={style.subText}>
          {
            'Your internet connection is down.Please fix it and then you can continue using MIS.'
          }
        </Text>
        <RNButton onPress={handleRefresh} title={'Try again'} />
      </View>
    </Modal>
  );
}

export default ConnectionInfo;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
  },
  text: {
    color: COLORS.GREY_COLOR,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  viewContainer: {
    backgroundColor: COLORS.RED,
    height: '50%',
  },
  subText: {
    fontSize: 16,
    color: COLORS.GREY_COLOR,
    textAlign: 'center',
    marginBottom: 10,
  },
});
