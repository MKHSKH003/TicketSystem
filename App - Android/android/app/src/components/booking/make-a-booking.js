import React, { Component } from 'react'
import {Picker, ScrollView, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { Col, Row, Grid } from 'react-native-easy-grid';
import DatePicker from 'react-native-date-picker';
import dateFormat from 'dateformat'

import Inputs from './inputs-section';
import Header from '../Header/header.js';

export default class Booking extends Component {
  constructor(props) {
      super(props);
      this.state={
          name:null,
          cell:null,
          email:null,
          location:null,
          people:null,
          film:null,
          date:Date.now(),
          paymentDate:Date.now(),
      }
    this.name = this.name.bind(this);
    this.cell = this.cell.bind(this);
    this.email = this.email.bind(this);
    this.location = this.location.bind(this);
    this.people = this.people.bind(this);
  }

  name(value){this.setState({name:value});}
  cell(value){this.setState({cell:value});}
  email(value){this.setState({email:value});}
  location(value){this.setState({location:value});}
  people(value){this.setState({people:value});}


  render(value) 
  {
    return (
    <ScrollView>
        <Header props={this.props} />
        <View style={{flex: 0, margin:20}}>
            <Inputs  label={'Your name'} userEntry={this.name} />
            <Inputs  label={'Cell number'} isNumeric={true} userEntry={this.cell}/>
            <Inputs  label={'Email'} userEntry={this.email} />
            <Inputs  label={'Location'} userEntry={this.location} />
            <Inputs  label={'Number of people'} isNumeric={true} userEntry={this.people}/>
            
            <Row>
                <Text style={{fontSize: 15,marginTop:25}}>Select film:      </Text>
                <Picker
                    style={{ height: 70, width: 100 }}
                    onValueChange={(itemValue) => this.setState({film: itemValue})}>
                    <Picker.Item label="Select film:" value="java" />
                    <Picker.Item label="Born Africa" value="Born Africa" />
                    <Picker.Item label="Black Panther" value="Black Panther" />
                </Picker>
            </Row>
            
            <Text style={{fontSize: 17,marginTop:10}}>Date</Text>
            <DatePicker style={{width:375, marginTop:5}}
                date={this.state.date}
                onDateChange={date => this.setState({date:date})}
            />
            <Text style={{fontSize: 17,marginTop:15}}>Payment date</Text>
            <DatePicker style={{width:375, marginTop:5}}
                date={this.state.date}
                onDateChange={date => this.setState({paymentDate:date})}
            />
            
            <Button
                color='#fff'
                title='Submit'
                onPress={()=>this.props.booking(this.state.name,this.state.cell,this.state.email,this.state.location,this.state.people,this.state.film,dateFormat(this.state.date,"dd-mmm-yy"),dateFormat(this.state.paymentDate,"dd-mmm-yy"))}
            />
        </View>
    </ScrollView>
  );
 }
}