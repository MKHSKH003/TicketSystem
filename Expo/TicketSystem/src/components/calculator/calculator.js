import React, { Component } from 'react'
import {Picker, ScrollView, Text, View} from 'react-native';
import Dimensions from 'Dimensions';
import { Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import SelectInput from '@tele2/react-native-select-input';
import {Actions, ActionConst} from 'react-native-router-flux';

import Header from '../Header/header.js';
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Calculator extends Component {
  constructor(props) {
      super(props);
      this.state={
          cost:0,
          people:0,
          movie:'TAB TO SELECT',
          label:'TAB TO SELECT',
      }
  }
 
  setFillmState(value){
    const filmPrice = parseInt(value.split(',')[1]);
    const filmLabel = value.split(',')[0];
    this.setState({label:filmLabel+" : R"+filmPrice+" PER PERSON"}) 
    this.setState({movie:filmPrice}) 
  }

  render() 
  {
      const {options} = this.props
    
    return (
        <ScrollView>
            <Header props={this.props}/>
            <View style={{flex: 0, margin:20}}>
                
                <View style={{fontSize: 18,marginTop:30, margin:20}}>
                    <Text style={{fontSize: 15, color:this.props.color}}>SELECT FILM:</Text>
                    <SelectInput 
                        value={this.state.movie} 
                        label={this.state.label}
                        style={{fontSize:10}} 
                        options={options}
                        onChange={(value) => this.setFillmState(value)}
                        />
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
                <Text style={{margin:20, fontSize:30, fontFamily:'Helvetica'}}>
                  TOTAL COST: R{isNaN(this.state.people*this.state.movie)==false? this.state.people*this.state.movie:0}
                 </Text>

                 <Button
                    style={{marginTop:20}}
                    color='#fff'
                    title='MAKE A BOOKING'
                    onPress={()=>Actions.booking({color:'#1abc9c',title:'MAKE A BOOKING'})}
                 />
            </View>
        </ScrollView>
    );
  }
}