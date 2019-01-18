
import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry,Text} from 'react-native';
import { Toast } from 'react-native-redux-toast';

//import App from './App';
import App from './src/root/routes';

//import {name as appName} from './app.json';
import configureStore from './src/shared/store';

const store = configureStore();

const  RNRedux = () => (
   <Provider store={store}>
     <App/>
     <Toast messageStyle={{ color: 'white' }} />
   </Provider>
)

export default RNRedux;
