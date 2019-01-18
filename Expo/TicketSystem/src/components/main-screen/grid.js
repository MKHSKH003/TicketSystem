import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
           data: [
                { name: 'MAKE A BOOKING', code: '#1abc9c' }, { name: 'VIEW BOOKINGS', code: '#2ecc71' },
                { name: 'AVAILABLE MOVIES', code: '#3498db' }, { name: 'CALCULATE COST', code: '#9b59b6' },
                { name: 'STATISTICS', code: '#34495e' }, { name: 'CHAT ROOM', code: '#16a085' },
            ]
        }
      ]
    };
    this.navigate = this.navigate.bind(this);

  }
  
  navigate(screen, color){
     if(screen =='MAKE A BOOKING'){Actions.booking({color:color,title:screen});}
     else if(screen =='VIEW BOOKINGS'){this.props.onLoadBookings();Actions.bookings({color:color,title:screen});}
     else if(screen =='AVAILABLE MOVIES'){this.props.onLoadMovies();Actions.movies({color:color,title:screen});}
     else if(screen =='CALCULATE COST'){Actions.calculator({color:color,title:screen});}  
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
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
         </TouchableOpacity>
        )}
       
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 15,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});