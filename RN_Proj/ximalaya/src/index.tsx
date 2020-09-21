import Navigator from '@/navigators/StackNavigator';

import React from 'react';
import {Provider} from 'react-redux';
import store from '@/model/dva';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
