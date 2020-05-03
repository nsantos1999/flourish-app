import React from 'react';
import { View, StatusBar } from 'react-native';
import GalioApp from './src/navigations/StackNavigation';

import { Provider } from 'react-redux';

import storeConfig from './src/store';
const store = storeConfig();

import {  withGalio, GalioProvider } from 'galio-framework'

import theme from './src/theme';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GalioProvider theme={theme}>
          <View style={{ flex: 1 }}>
            <StatusBar hidden={false} backgroundColor={theme.COLORS.PRIMARY} barStyle="light-content"/>
            <GalioApp />
          </View>
        </GalioProvider>
      </Provider>
    );
  }
}
