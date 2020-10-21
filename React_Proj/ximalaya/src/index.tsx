import Navigator from '@/navigators/StackNavigator';

import {StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/model/dva';
//这里一定要import否则请求会失败
import '@/configs/https';
import {RootSiblingParent} from 'react-native-root-siblings';
import {enableScreens} from 'react-native-screens';

import SplashScreen from 'react-native-splash-screen';

enableScreens();

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent
        />
        <RootSiblingParent>
          <Navigator />
        </RootSiblingParent>
      </Provider>
    );
  }
}

export default App;
