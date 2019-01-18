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
import { Col, Row, Grid } from "react-native-easy-grid";


let LoginScreen = ({userLogin})=> (
  <Grid>
        <Wallpaper >
          <LoginFailure  />
          <Row>
          <Logo />
          </Row>
          <Row> 
          <Form userLogin={userLogin}/>
          </Row>
        </Wallpaper>
        </Grid>
  
    );

export default LoginScreen;
