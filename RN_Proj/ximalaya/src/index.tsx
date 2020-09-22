import Navigator from '@/navigators/StackNavigator';

import {StatusBar} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from '@/model/dva';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent
        />
        <Navigator />
      </Provider>
    );
  }
}

export default App;
