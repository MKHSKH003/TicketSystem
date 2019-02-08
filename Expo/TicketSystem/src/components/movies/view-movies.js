import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
  Alert, ScrollView, FlatList
} from 'react-native';

import Header from '../Header/header.js';
import LoadingMovies from '../../containers/movies/loading-movies';
import AddMoviesModal from './add-movie-modal'
import UpdateMoviesModal from './update-movie-modal'

export default class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      _modalVisible:false,
      itemSelected:[],
      data: [
        {id:1,name:"Born Africa",price:"20",image:"https://images-na.ssl-images-amazon.com/images/I/517NCGQ54GL._SX295_BO1,204,203,200_.jpg"},
        {id:2,name:"Black Panther",price:"25",image:"https://nerdist.com/wp-content/uploads/2018/02/10763.jpg"},
       ]
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this._setModalVisible = this._setModalVisible.bind(this);
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _setModalVisible(visible) {
    this.setState({_modalVisible: visible});
  }

  render() {
      const {movies, addMovie, updateMoviePrice,deleteMovie, username} = this.props;
    return (
      <ScrollView>
      <Header props={this.props} />
          <Button
          style={{marginTop:20}}
          color='#fff'
          title='ADD MOVIE'
          onPress={()=>{this.setModalVisible(true)}}
        />
      
      <LoadingMovies />
      <AddMoviesModal username={username} setModalVisible={this.setModalVisible} addMovie={addMovie} modalVisible={this.state.modalVisible}/>
      <UpdateMoviesModal 
          username={username}
          item={this.state.itemSelected}
          deleteMovie={deleteMovie} 
          updateMoviePrice={updateMoviePrice} 
          setModalVisible={this._setModalVisible} 
          modalVisible={this.state._modalVisible}
       />
      <View style={styles.container}>
        
        <FlatList style={styles.list}
          data={movies? movies.reverse():null}
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
                <TouchableOpacity onPress={()=>{this.setState({_modalVisible: true, itemSelected:item})}}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={styles.title}>{item.name}</Text>
                      <Text style={styles.description}>Price: R{item.price}/Person</Text>
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