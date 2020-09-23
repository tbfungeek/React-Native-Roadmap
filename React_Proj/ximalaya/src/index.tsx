import Navigator from '@/navigators/StackNavigator';

import {StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/model/dva';
//这里一定要import否则请求会失败
import '@/configs/https';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent
        />
        <Navigator />
      </Provider>
    );
  }
}

export default App;
