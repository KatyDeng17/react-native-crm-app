

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


// import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import { MKTextField, MKColor } from 'react-native-material-kit';





// const LoginButton = MKButton.coloredButton().withText('Login').build();

// const LoginButton = MKButton.coloredButton()
//     .withText('LOGIN')
//     .build();

type Props = {};
export default class Login extends Component<Props> {
  state = {
    email: '', 
    password: '', 
  }  

  onButtonPress=()=> {
    console.log('Button is clicked....')
  }

  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage, welcome, container, buttonText} = styles
    return (
      <View style={container}>
        <Text style={welcome}>Welcome to CRM</Text>
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
          {/* <LoginButton onPress = {this.onButtonPress.bind(this)} /> */}
          <TouchableOpacity onPress = {this.onButtonPress} > 
            <Text style={buttonText}> Login Button </Text>
          </TouchableOpacity> 
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
    backgroundColor:'pink',
    padding: 15,
    borderRadius: 10, 

  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});
