import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../actions/newsActions';
import {Text, View, Button} from 'react-native';

let LoadButton=({getNews})=>(
    <View>
        <Button onPress={getNews}
            title="Press to see news"
        />
   </View>
);

export default LoadButton;