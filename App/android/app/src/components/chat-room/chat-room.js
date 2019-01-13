import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';

import Header from '../Header/header.js';
import LoadingMessages from '../../containers/chat-room/loading-messages';

export default class ChatRoom extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userMessage:'',
      data: [
        {id:1, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", name:'Vusi'},
        {id:2, date:"9:50 am", types:'out', message: "Lorem ipsum dolor sit amet", name:'Skhumbuzo'} ,
        {id:3, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit a met", name:'Vusi'}, 
        {id:4, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit a met", name:"Vusi"}, 
        {id:5, date:"9:50 am", types:'out', message: "Lorem ipsum dolor sit a met", name:"Skhumbuzo"}, 
        {id:6, date:"9:50 am", types:'out', message: "Lorem ipsum dolor sit a met", name:"Skhumbuzo"}, 
        {id:7, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit a met", name:"Vusi"}, 
        {id:8, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit a met", name:"Vusi"},
        {id:9, date:"9:50 am", types:'in',  message: "Lorem ipsum dolor sit a met", name:"Vusi"},
      ]
    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  render() {
    const {messages,username}= this.props
    return (
      <View style={styles.container}>
        <Header props={this.props} />
        <LoadingMessages/>
        <FlatList style={styles.list}
          data={messages}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.name !== username;
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {!inMessage && this.renderDate(item.date)}
                {inMessage && this.renderDate(item.date+" "+item.name)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                value={this.state.userMessage}
                onChangeText={(name_address) => this.setState({userMessage:name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend} onPress={()=>{this.props.sendMessage(username,this.state.userMessage);this.setState({userMessage:''})}}>
              <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});  