import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Buttons extends Component {
  onButtonPress=()=> {
    alert('Button is clicked....')
  }
  render(){
    const {button, buttonText} = styles
    return(
         <TouchableOpacity onPress = {this.onButtonPress} style={button}> 
            <Text style={buttonText}> Login Button </Text>
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
    shadowOpacity: .6

  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
   

  }
});

