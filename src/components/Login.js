

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


import { MKTextField, MKColor } from 'react-native-material-kit';
import Loader from './Loader';
import Buttons from './Buttons';

// import {MKTextField, MKColor, MKButton} from 'react-native-material-kit'; does not work 
// const LoginButton = MKButton.coloredButton().withText('Login').build();

export default class Login extends Component {
  state = {
    email: '', 
    password: '', 
    loading : false,
  }  

  // onButtonPress=()=> {
  //   alert('Button is clicked....')
  // }

  renderLoader = () => {
      if(this.state.loading){
           return <Loader size = "large" />
      }else {
           return <Buttons /> 
      }
  }
  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage, welcome, container,button, buttonText} = styles
    return (
      <View style={form}>
        <Text style={welcome}>Login or Create an account</Text>
        <MKTextField 
           text={this.state.email}
           onTextChange={email => this.setState({email})}
           placeholder={'enter email...'} 
           tintColor ={MKColor.Teal}
           textInputStyle = {fieldStyles}
        />
        <MKTextField
           text={this.state.password}
           onTextChange={password =>  this.setState({password})}
           placeholder={'enter password...'}
           tintColor={MKColor.Teal}
           textInputStyle = {fieldStyles}
           password = {true} //showing .... when user enter the password
        />
        <Text style ={errorMessage}>{this.state.error} </Text>
        <View style={loginButtonArea}> 
          {/* <LoginButton onPress = {this.onButtonPress.bind(this)} />  */}
          {this.renderLoader()}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form:{
    paddingBottom: 10, 
    width: 200,
  },
  fieldStyles:{
    height: 40, 
    color:MKColor.orange,
    width: 200,
  },
  loginButtonArea: {
    marginTop:20,
    alignItems: 'center',
  },
});
