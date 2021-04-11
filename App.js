import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import Routes from "./src/Navigation/Routes";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import {getUserData} from './src/utils/utils';
import types from './src/redux/types';
import { getFCMToken } from  "./src/utils/pushNotification" ;

class App extends React.Component {
  componentDidMount(){
    // getFCMToken();
    getUserData().then((userData)=>{
      if(userData){
        dispatchEvent({
          type: types.LOGIN,
          payload: userData,
        });
        SplashScreen.hide();
      }
      SplashScreen.hide();
    });
  }
render(){
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
};
}

export default App;
