import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Text
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import arrowImg from '../../../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this._onPress = this._onPress.bind(this);
    this.growAnimated = new Animated.Value(0);
  }

  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});

    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      Actions.pop();
    }, 500);
  }

  render() {
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, SIZE],
    });

    return (
      <View style={styles.container}>

        <View style={[styles.textContainer]}>
          <Text style={[styles.text]}> 
            You have successfully logged in...
          </Text>
        </View> 

        <View style={[styles.backButtonContainer]}>
          <TouchableOpacity 
            onPress={this._onPress}
            style={styles.button}
            activeOpacity={1}>
            <Image style={styles.image} source={arrowImg} />
          </TouchableOpacity>
          
          <Animated.View 
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
   textContainer: {
   
    alignSelf:"center"
  },

  container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',

  },

  backButtonContainer: {
    margin: 20,
    position: 'absolute',
    bottom: 10,
    right: 10
    //alignSelf:"flex-end"
  },

text: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    color: 'green', 
  },

 

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: 100,
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    marginTop: -SIZE,
    borderRadius: 100,
    backgroundColor: '#F035E0',
  },
  image: {
    width: 24,
    height: 24,
  },

 

});
