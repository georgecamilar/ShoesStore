import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TextInput,KeyboardAvoidingView} from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image
            style={styles.image}

            source={require('../assets/logo.jpg')}
            />
          </View>

          <KeyboardAvoidingView behavior='padding' enabled style={styles.formcontainer}>
            <LoginForm/>
          </KeyboardAvoidingView>
         </View>

    )
  }
}

const styles = StyleSheet.create({
    image:{
      width:220,
      height:220
    },
    container:{
      backgroundColor: '#3498db',
      justifyContent: 'center',

    },
    logocontainer:{
     alignItems:'center',
     height:300,
     justifyContent:'center',
     backgroundColor:'#3498db',
     
    },
    formcontainer:{
      backgroundColor :'#3498db'
    }

 })
