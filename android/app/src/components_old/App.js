/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import FetchLocation from './android/app/src/components_old/FetchLocation';
import UserMap from './android/app/src/components_old/UsersMap';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends React.Component {


  state={
    userLocation: null,
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position =>{
      this.setState({
        userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
        }
      
      });
     }, err => console.log(err));

  }
  render() {
    return (
     // console.log("o "+this.state.userLocation),
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
         <UserMap userLocation={this.state.userLocation}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});