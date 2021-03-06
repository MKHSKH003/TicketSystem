import React from 'react';
import {Text, View, Button,Image} from 'react-native';
import img from '../../images/loading_spinner.gif'

let LoadingBookings = ({ loading }) => (
    loading ? 
        <View style={{ textAlign: 'center' }}>
            <Image style={{width: 400, height: 300}}   source={img} />
        </View>
    :
    null
);


export default LoadingBookings;