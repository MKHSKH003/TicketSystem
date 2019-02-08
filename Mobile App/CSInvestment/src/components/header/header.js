import React from 'react';
import { Input, Button, ThemeProvider, Header } from 'react-native-elements';
import {Actions, ActionConst} from 'react-native-router-flux';

let ScreenHeader=(props)=>(
     <Header 
        leftComponent={{ icon: 'menu', color: '#fff',onPress:()=>{Actions.mainScreen()} }}
        centerComponent={{ text: props.props.title, style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' ,onPress:()=>{Actions.mainScreen()}}}
        statusBarProps={{ barStyle: 'light-content' }} 
        containerStyle={{
            backgroundColor: props.props.color,
            justifyContent: 'space-around',
        }}
    />
);

export default ScreenHeader;