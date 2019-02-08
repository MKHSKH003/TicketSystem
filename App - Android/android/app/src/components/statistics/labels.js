import React, { Component } from 'react'
import { Col, Row, Grid } from 'react-native-easy-grid';
import {ScrollView, Text, View} from 'react-native';
import { Icon } from 'react-native-elements'

export default class ChartLables extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
 
  render() 
  {
    return (
            <View style={{marginLeft:30}}>
                <Row>
                    <Icon name='stop' color='#1abc9c' /><Text>Total Bookings</Text>
                    <Icon name='stop' color='#3498db' /><Text>Paid Bookings</Text>
                    <Icon name='stop' color='#34495e' /><Text>Unpaid Bookings</Text>
                 </Row>            
           </View>
         
    );
  }
}


