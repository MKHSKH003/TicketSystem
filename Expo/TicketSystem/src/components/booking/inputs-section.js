import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
 
export default class Inputs extends Component {
  render() {
    const { label, isNumeric, userEntry } = this.props;

     //console.log('label',phone);
    return (
     
    isNumeric?
      <TextField
        keyboardType='numeric'
        label={label}
        onChangeText={ (value) => userEntry(value) }
      />
      :
      <TextField
        label={label}
        onChangeText={ (value) => userEntry(value) }
      />

    );
  }
}