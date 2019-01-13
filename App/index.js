/** @format */
import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import { Toast } from 'react-native-redux-toast';

import App from './App';
import {name as appName} from './app.json';
import configureStore from './android/app/src/shared/store';

const store = configureStore();

const RNRedux = () => (
   <Provider store={store}>
     <App />
     <Toast messageStyle={{ color: 'white' }} />
   </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
