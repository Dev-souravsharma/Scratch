import React, {useEffect} from 'react';
import Router from './router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RNSafeView from './components/RNSafeView';
import {Provider} from 'react-redux';
import {store} from './feature/store';
import ConnectionInfo from './utils/hooks/netInfo';
import SplashScreen from 'react-native-splash-screen';

function Main(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
