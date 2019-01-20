import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
  Alert, ScrollView, FlatList, Modal, TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';

export default class AddMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name:null,
        price:null,
        url:null        
    }
  }
  render() {
    const { setModalVisible, modalVisible, addMovie, username } = this.props;
    return (
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          visible={modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    <TouchableOpacity>
                    <Text style={styles.name}> ADD NEW MOVIE </Text>
                    
                    <View style={{flex: 0, margin:20,marginTop:0, color:'red'}}>
                    <TextField
                        baseColor={this.props.color}
                        tintColor={this.props.color}
                        label={"ENTER MOVIE NAME"}
                        onChangeText={ (value) =>{ this.setState({name:value});}}
                    />
                    </View>
                    <View style={{flex: 0, margin:20,marginTop:0, color:'red'}}>
                    <TextField
                        baseColor={this.props.color}
                        tintColor={this.props.color}
                        keyboardType='numeric'
                        label={"PRICE PER PERSON"}
                        onChangeText={ (value) =>{ this.setState({price:value});}}
                    />
                     </View>
                    <View style={{flex: 0, margin:20,marginTop:0, color:'red'}}>
                    <TextField
                        baseColor={this.props.color}
                        tintColor={this.props.color}
                        label={"COVER IMAGE URL"}
                        onChangeText={ (value) =>{ this.setState({url:value});}}
                    />
                    </View>
                    <Button
                        style={{marginTop:20}}
                        color='#fff'
                        title='ADD MOVIE'
                        onPress={()=>{addMovie(this.state.name,this.state.price,this.state.url,username);setModalVisible(false)}}
                    />
                    </TouchableOpacity>

                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:5,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold',
    margin:20, 
    fontSize:20
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  about:{
    marginHorizontal:10
  },

  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    margin: 5,
    height:400,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:28,
    backgroundColor:'#20b2aa',
    width:80,
    padding:5,
    alignItems:'center',
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  },
  txtClose:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 