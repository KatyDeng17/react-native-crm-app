

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import firebase from 'firebase';
import Login from './src/components/Login';
import Loader from './src/components/Loader';
import PeopleList from './src/components/PeopleList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  state = { 
    loggedIn: null,
  }
  //connecting to firebase:
    componentWillMount(){
      
      firebase.initializeApp({
        apiKey: "AIzaSyAs45Z-nz500xR5kTzNhUbpigkM8jFf_IQ",
        authDomain: "crm-app-534fe.firebaseapp.com",
        databaseURL: "https://crm-app-534fe.firebaseio.com",
        projectId: "crm-app-534fe",
        storageBucket: "",
        messagingSenderId: "770405435492"
      }); 
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({
            loggedIn: true
          })}
          else{
            this.setState({
              loggedIn:false
            })
          }
      });
    }
    renderInitialView(){
      switch (this.state.loggedIn){
        case true:
           return <PeopleList />
        case false: 
           return <Login /> 
        default: 
           return <Loader size = 'large' />
      }
    }
  render() {
    return (
      <View style={styles.container}>
       {this.renderInitialView()}
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


});
