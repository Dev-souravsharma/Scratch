import React from 'react';
import Router from './router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNSafeView from './components/RNSafeView';
import {Provider} from 'react-redux';
import {store} from './feature/store';
import ConnectionInfo from './utils/hooks/netInfo';

function Main(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RNSafeView>
          <ConnectionInfo />
          <Router />
        </RNSafeView>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Main;
