import React, { Component } from 'react'
import {Picker, ScrollView, Text, View} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {DatePickerIOS} from 'react-native';
import dateFormat from 'dateformat';
import SelectInput from '@tele2/react-native-select-input';

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
          film:'Tab to select',
          date:new Date(),
          paymentDate:new Date(),
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

      const {username, options}=this.props
      
    return (
    <ScrollView>
        <Header props={this.props} />
        <View style={{flex: 0, margin:20}}>
            <Inputs  label={'Your name'} userEntry={this.name} />
            <Inputs  label={'Cell number'} isNumeric={true} userEntry={this.cell}/>
            <Inputs  label={'Email'} userEntry={this.email} />
            <Inputs  label={'Location'} userEntry={this.location} />
            <Inputs  label={'Number of people'} isNumeric={true} userEntry={this.people}/>
            
      
            <View style={{fontSize: 15,marginTop:30}}>
                <Text style={{fontSize: 15}}>Select film:</Text>
                <SelectInput 
                    value={this.state.film} 
                    style={{fontSize:10}} 
                    options={options} 
                    onChange={(value) => {this.setState({film:value})} }
                    />
            </View>

            <Text style={{fontSize: 17,marginTop:10}}>Date</Text>
            <DatePickerIOS style={{width:375, marginTop:5}}
                date={this.state.date}
                onDateChange={date => this.setState({date:date})}
            />
            <Text style={{fontSize: 17,marginTop:15}}>Payment date</Text>
            <DatePickerIOS style={{width:375, marginTop:5}}
                date={this.state.paymentDate}
                onDateChange={date => this.setState({paymentDate:date})}
            />
            
            <Button
                color='#fff'
                title='Submit'
                onPress={()=>
                    this.props.booking(
                        this.state.name,
                        this.state.cell,
                        this.state.email,
                        this.state.location,
                        this.state.people,
                        this.state.film,
                        dateFormat(this.state.date,"dd-mmm-yy"),
                        dateFormat(this.state.paymentDate,"dd-mmm-yy"),
                        username
                    )}
            />
        </View>
    </ScrollView>
  );
 }
}