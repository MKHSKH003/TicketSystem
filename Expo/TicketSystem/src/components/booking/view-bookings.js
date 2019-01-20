import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
  Alert, ScrollView, FlatList, Button, Modal, TouchableHighlight
} from 'react-native';

import Header from '../Header/header.js';
import LoadingBookings from '../../containers/booking/loading-bookings';
import UpdateBookingModal from './update-booking-modal.js';

export default class Bookings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      itemSelected:[],
    };

    this.setModalVisible = this.setModalVisible.bind(this);
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
      const {bookings, updateBookingStatus, deleteBooking, username} = this.props;
    return (
      <ScrollView>
      <Header props={this.props} />
      <LoadingBookings />
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={bookings? bookings.reverse():null}
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <UpdateBookingModal
                      username={username}
                      deleteBooking={deleteBooking}  
                      updateBookingStatus={updateBookingStatus} 
                      item={this.state.itemSelected}  
                      setModalVisible={this.setModalVisible} 
                      modalVisible={this.state.modalVisible}
                 />
                <TouchableOpacity onPress={()=>this.setState({modalVisible: true, itemSelected:item})}> 
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.film}</Text>
                    <Text style={styles.description}>Name: {item.name}</Text>
                    <Text style={styles.description}>Cell : {item.cell}</Text>
                    <Text style={styles.description}>People : {item.people}</Text>
                    <Text style={styles.description}>Location : {item.location}</Text>
                    <View style={styles.timeContainer}>
                      <Text style={styles.time}>Date: {item.date}</Text>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                    </View>
                    <View style={styles.timeContainer}>
                      <Text style={styles.time}>Payment: {item.paymentDate}</Text>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                    </View>
                    <Text style={styles.time}>Status: {item.status}</Text>
                    <Text style={styles.time}>Cost  : R{item.cost}</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            )
          }}/>
          
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 250,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
 
});   