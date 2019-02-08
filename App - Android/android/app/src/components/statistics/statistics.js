import React, { Component } from 'react'
import { TextField } from 'react-native-material-textfield';
import {ScrollView, View, Text} from 'react-native';

import Header from '../Header/header.js';
import PieChartWithCenteredLabels from './pie_chart';
import ChartLables from './labels';
import LoadingBookings from '../../containers/booking/loading-bookings';

export default class Statistics extends Component {
  constructor(props) {
      super(props);
      this.state={
      }
  }
 
  render() 
  {
    return (
        <ScrollView >
            <Header props={this.props}/>
            <Text style={{textAlign:'center',fontSize:25, color:'#34495e', align:'center'}}>Bookings</Text>
            <LoadingBookings />
            <PieChartWithCenteredLabels bookings={this.props.bookings}/>
            <ChartLables/>
         </ScrollView>
    );
  }
}