import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Toaster, { ToastStyles } from 'react-native-toaster';

import LoginScreen from '../containers/login/login';
//import LoginScreen from '../components/login/components/LoginScreen';
import SecondScreen from '../components/login/components/SecondScreen';
import NewsFeed from '../components/news/news-feed';
import LoginFailure from '../components/notifications/login-failure';

export default class Routes extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={LoginScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
	        <Scene key="newsFeed"
	          component={NewsFeed}
	          animation='fade'
	          hideNavBar={true}
	        />

					<Scene key="loginFailure"
	          component={LoginFailure}
	          animation='fade'
	          hideNavBar={true}
	        />

				



	      </Scene>
	    </Router>
	  );
	}
}