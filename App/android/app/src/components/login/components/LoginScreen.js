import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {  StyleSheet, View  } from 'react-native';

import LoginFailure from '../../../containers/notifications/login-failure';
//import LoadingNews from '../../../containers/notifications/loading-news';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
//import { Col, Row, Grid } from "react-native-easy-grid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

let LoginScreen = ({userLogin})=> (
        <Wallpaper >
          <LoginFailure  />
          <Logo /> 
          <Form userLogin={userLogin}/>
        </Wallpaper>
  
    );

export default LoginScreen;
