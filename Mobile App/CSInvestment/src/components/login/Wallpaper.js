import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../../images/white2.gif';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
});