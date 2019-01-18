import React, { Component } from 'react'
import {Picker, ScrollView, Text, View} from 'react-native';
import Dimensions from 'Dimensions';
import { TextField } from 'react-native-material-textfield';

import Header from '../Header/header.js';
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Calculator extends Component {
  constructor(props) {
      super(props);
      this.state={
          cost:0,
          people:0,
          movie:0
      }
  }
 
  render() 
  {
    return (
        <View >
            <Header props={this.props}/>
            <View style={{ height: 70, width: DEVICE_WIDTH -40, borderColor:this.props.color,borderWidth: 3,borderRadius: 10,margin:20}}>
            <Picker
                style={{ height: 60 }}
                onValueChange={(value) => this.setState({movie:value}) }>
                <Picker.Item label="Select film:" value="No selection" />
                <Picker.Item label="Born Africa" value="20" />
                <Picker.Item label="Black Panther" value="25" />
            </Picker>
            </View>
           <View style={{flex: 0, margin:20,marginTop:0, color:'red'}}>
            <TextField
                baseColor={this.props.color}
                tintColor={this.props.color}
                keyboardType='numeric'
                label={"ENTER NUMBER OF PEOPLE"}
                onChangeText={ (value) =>{ this.setState({people:value});}}
            />

            </View>
            <Text style={{margin:20,fontWeight: 'bold', fontSize:30, fontFamily:'Helvetica'}}>TOTAL COST: R{this.state.people*this.state.movie}</Text>
        </View>
    );
  }
}