

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


import { MKTextField, MKColor } from 'react-native-material-kit';
import Loader from './Loader';
import Buttons from './Buttons';
import firebase from 'firebase';


export default class Login extends Component {
  state = {
    email: '', 
    password: '', 
    error: '',
    loading : false,
  }  


   onButtonPress=()=> {
    console.log('Button is clicked....')
    // const email  = this.state.email; 
    const { email, password } = this.state;
    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess)
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(this.onAuthSuccess)
              .catch(this.onAuthFailed);
      });
  }
  onAuthSuccess=()=>{
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false, 
    });
  }

  
  onAuthFailed=()=>{
    this.setState({
        error: 'Authentication Failed',
        loading: false,
    });
  }
  //render loader based on state 

  renderLoader = () => {
      if(this.state.loading){
          return <Loader size = "large" />
      }else {
          return <Buttons onPress= {this.onButtonPress} /> 
      }
  }
  render() {
    const {form, fieldStyles, loginButtonArea, errorMessage, welcome, container,button, buttonText} = styles
    return (
      <View style={form}>
        <Text >Login or Create an account</Text>
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
  errorMessage:{
    marginTop: 15,
    fontSize: 15,
    color: 'red', 
    alignSelf: 'center',
  },
});
