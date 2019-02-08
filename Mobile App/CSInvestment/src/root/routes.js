import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from '../containers/login/login';
import MainScreen from '../containers/main-screen/main';
import AddStudent from '../containers/students/add-student';
import ViewStudents from '../containers/students/load-students'
export default class Routes extends Component {
  render() {
	  return (
	    <Router>
	      <Scene key="root">
	        <Scene key="loginScreen"
	          component={MainScreen}
	        	animation='fade'
	          hideNavBar={true}
	          initial={true}
	        />
				 <Scene key="mainScreen"
	          component={MainScreen}
	          animation='fade'
	          hideNavBar={true}
	        />
				 <Scene key="addStudent"
	          component={AddStudent}
	          animation='fade'
	          hideNavBar={true}
	         />

				 <Scene key="viewStudents"
	          component={ViewStudents}
	          animation='fade'
	          hideNavBar={true}
	         />
	      </Scene>
	    </Router>
	  );
	}
}