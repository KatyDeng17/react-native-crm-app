import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import firebase from 'firebase';

export default class Buttons extends Component {

  
  render(){
    const {button, buttonText} = styles
    return(
         <TouchableOpacity onPress = {this.props.onPress} style={button}> 
            <Text style={buttonText}> Login  </Text>
         </TouchableOpacity>  
    )
  }
}

const styles = StyleSheet.create({

  button:{
    backgroundColor:'pink',
    padding: 15,
    borderRadius: 10,
    shadowOffset:{width:1, height:2},
    shadowColor:"gray", 
    shadowOpacity: .6,
    alignItems: 'center',
    width: 100,


  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

