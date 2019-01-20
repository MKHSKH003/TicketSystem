import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
           data: [
                { name: 'BOOKING', code: '#1abc9c',image:'https://img.icons8.com/color/48/000000/ticket-purchase.png' }, 
                { name: 'VIEW BOOKINGS', code: '#2ecc71',image:'https://img.icons8.com/color/48/000000/today.png' },
                { name: 'MOVIES', code: '#3498db',image:'https://img.icons8.com/color/48/000000/cinema-.png' }, 
                { name: 'CALCULATOR', code: '#9b59b6',image:'https://img.icons8.com/color/48/000000/calculator.png' },
                { name: 'STATISTICS', code: '#34495e' ,image:'https://img.icons8.com/color/48/000000/statistics.png'}, 
                { name: 'CHAT ROOM', code: '#16a085',image:'https://img.icons8.com/color/48/000000/collaboration.png' },
            ]
        }
      ]
    };
    this.navigate = this.navigate.bind(this);

  }
  
  navigate(screen, color){
     if(screen =='BOOKING'){this.props.onLoadMovies();Actions.booking({color:color,title:screen});}
     else if(screen =='VIEW BOOKINGS'){this.props.onLoadBookings();Actions.bookings({color:color,title:screen});}
     else if(screen =='MOVIES'){this.props.onLoadMovies();Actions.movies({color:color,title:screen});}
     else if(screen =='CALCULATOR'){this.props.onLoadMovies();Actions.calculator({color:color,title:screen});}  
     else if(screen =='STATISTICS'){this.props.onLoadBookings();Actions.statistics({color:color,title:screen});} 
     else if(screen =='CHAT ROOM'){this.props.onLoadMessages();Actions.chatroom({color:color,title:screen});}  
 
}

  render() {
    return (
      <SuperGridSectionList
        itemDimension={120}
        sections={this.state.items}
        style={styles.gridView}
        renderItem={({ item }) => (
         <TouchableOpacity onPress={()=>this.navigate(item.name,item.code)}> 
          <View style={[styles.itemContainer, { backgroundColor: 'white' }]}>
            <Image style={styles.icon} source={{uri: item.image}}/>
            <Text style={styles.itemCode}>{item.name}</Text>
          </View>
         </TouchableOpacity>
        )}
       
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 5,
    flex: 1,
  },
  itemContainer: {
    borderRadius: 0,
    padding: 10,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'black',
  },

   icon: {
    width:60,
    height:60,
  },
});