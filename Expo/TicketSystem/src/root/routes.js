import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../containers/login/login';
import MainScreen from '../containers/main-screen/main';
import Booking from '../containers/booking/make-a-booking';
import Bookings from '../containers/booking/view-bookings'
import Movies from '../containers/movies/view-movies'
import Calculator from '../components/calculator/calculator';
import Statistics from '../containers/statistics/statistics';
import ChatRoom from '../containers/chat-room/messages';
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
					<Scene key="mainScreen"
	          component={MainScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
					<Scene key="loginFailure"
	          component={LoginFailure}
	          animation='fade'
	          hideNavBar={true}
	        />
         	<Scene key="booking"
	          component={Booking}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="bookings"
	          component={Bookings}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="movies"
	          component={Movies}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="calculator"
	          component={Calculator}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="statistics"
	          component={Statistics}
	          animation='fade'
	          hideNavBar={true}
	         />
					 <Scene key="chatroom"
	          component={ChatRoom}
	          animation='fade'
	          hideNavBar={true}
	         />

	      </Scene>
	    </Router>
	  );
	}
}