import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './android/app/src/components/login/components/LoginScreen';
import SecondScreen from './android/app/src/components/login/components/SecondScreen';
import RootApp from './android/app/src/root/App';
export default class App extends Component {
  render() {
	  return (
	    <RootApp/>
	  );
	}
}