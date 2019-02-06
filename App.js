import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Login from './LoginStuff/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>  
      );
  }
}

const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    backgroundColor : '#3498db',
    justifyContent : 'center',
    flex: 1,
    position : 'absolute',top:0,bottom:0,left:0,right:0,
  }
})

