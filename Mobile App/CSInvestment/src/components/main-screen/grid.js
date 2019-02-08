import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { SuperGridSectionList } from 'react-native-super-grid';
import {Actions, ActionConst} from 'react-native-router-flux';

import student from '../../images/menu-options/student.png';
import profit from '../../images/menu-options/profit.png';
import students from '../../images/menu-options/students.png';
import courses from '../../images/menu-options/courses.png';
import statistics from '../../images/menu-options/statistics.png';
import chat from '../../images/menu-options/chat.png';

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
           data: [
                { name: 'NEW STUDENT', code: '#1abc9c',image:student }, 
                { name: 'VIEW STUDENTS', code: '#2ecc71',image:students },
                { name: 'COURSES', code: '#3498db',image:courses }, 
                { name: 'FINANCIAL EDUCATION', code: '#9b59b6',image:profit},
                { name: 'STATISTICS', code: '#34495e' ,image:statistics}, 
                { name: 'CHAT ROOM', code: '#16a085',image:chat },
            ]
        }
      ]
    };
    this.navigate = this.navigate.bind(this);

  }
  
  navigate(screen, color){
     if(screen =='NEW STUDENT'){Actions.addStudent({color:color,title:screen});}
     else if(screen =='VIEW STUDENTS'){this.props.onLoadStudents();Actions.viewStudents({color:color,title:screen});}
     else if(screen =='COURSES'){this.props.onLoadCourses();Actions.courses({color:color,title:screen});}
     else if(screen =='FINANCIAL EDUCATION'){this.props.onLoadMovies();Actions.calculator({color:color,title:screen});}  
     else if(screen =='STATISTICS'){this.props.onLoadStudents();Actions.statistics({color:color,title:screen});} 
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
            <Image style={styles.icon} source={item.image}/>
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