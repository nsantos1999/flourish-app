import React from 'react';
import { View, StatusBar } from 'react-native';
import GalioApp from './routes';

import { Provider } from 'react-redux';

import storeConfig from './src/store';
const store = storeConfig();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar hidden={false} />
          <GalioApp />
        </View>
      </Provider>
    );
  }
}
