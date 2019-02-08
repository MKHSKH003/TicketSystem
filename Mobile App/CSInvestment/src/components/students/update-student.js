import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, Dimensions,
  Alert, ScrollView, FlatList, Modal, TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples', 'Oranges', 'Pears']
export default class UpdateStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        selectedFruits: [],
        _modalVisible:false,
        imageUrl:""
    }
  }

  updateImage(id){
     this.props.updateImage(id, this.state.imageUrl, "username");
     this.props.setModalVisible(false)
  }

  onSelectionsChange (selectedFruits){
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

  render() {
    const { setModalVisible, modalVisible, item, updatePaymentStatus, deleteStudent, updateImage, username } = this.props;
    const imagePlaceHolder = 'https://img.icons8.com/ios/48/000000/gender-neutral-user.png';
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
                    <Image style={styles.image} source={{uri:item.image? item.image : imagePlaceHolder }}/>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{'Location: '+item.location}</Text>
                    
                    {item.status!=='Paid'?
                    <TouchableOpacity>
                    <Text style={{marginTop:20, fontSize:20, fontFamily:'Helvetica'}}>
                    PAYMENT STATUS: <Text style={{color:'green'}}>{item.paymentStatus}</Text>
                    </Text>
                    
                    <View style={{ margin:20}}>
                    <TextField
                        baseColor={this.props.color}
                        tintColor={this.props.color}
                        label={"COVER IMAGE URL"}
                        onChangeText={ (value) =>{ this.setState({imageUrl:value});}}
                    />
                    </View> 
                    
                     
                    <Button
                        transparent={true}
                        style={{backgroundColor: '#ECF0F1',}}
                        color='green'
                        title='UPDATE PAYMENT STATUS'
                        onPress={()=>{updatePaymentStatus(item.id, "username");setModalVisible(false)}}
                    />
                    </TouchableOpacity>
                    : null}
                    <Button
                        transparent={true}
                        style={{marginTop:20, backgroundColor: '#ECF0F1',}}
                        color='red'
                        title='DELETE STUDENT RECORD'
                        onPress={()=>{deleteStudent(item.id, username);setModalVisible(false)}}
                    />

                    <View><Text> SELECT COURSE(S) FOR STUDENT</Text>
                    <SelectMultiple
                      items={fruits}
                      selectedItems={this.state.selectedFruits}
                      onSelectionsChange={this.onSelectionsChange} />
                     </View>

                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.state.imageUrl? this.updateImage(item.id) : setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>{this.state.imageUrl? "Update Image": "CANCEL"}</Text>
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
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
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
    height:530,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
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
    height:30,
    backgroundColor:'#20b2aa',
    width:100,
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