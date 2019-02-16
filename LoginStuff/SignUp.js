import React, { Component } from 'react'
import { TouchableOpacity, Text,View ,StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native'
import { Navigation } from 'react-native-navigation'

const BaseLink = 'http://192.168.100.3:1234/'; 


export default class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      signinButton : "",
      returnToLogin : ""
    }
  }

  signinButton= () =>{
    fetch("192.168.100.3:1234/users/sendShit", {
      method : 'POST',
      headers : {
        Accept:'application/json','Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.registered( " Success  ");
      this.props.navigation.navigate("MainWindow");
    })
    .catch((error)=>{
      console.log("network error");
    });

  }

  render() {
    return (
      <View style = {styles.main_view}>
        <KeyboardAvoidingView style = {styles.form_container}>
        <TextInput
                    style ={styles.text_input}
                    placeholder= 'Username'
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    returnKeyType = 'next'
                    onSubmitEditing={() => { this.password.focus(); }}>
                </TextInput>
            
                <TextInput
                    style ={styles.text_input}
                    secureTextEntry
                    placeholder= 'Password' 
                    ref= {(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    returnKeyType = 'done'>
                </TextInput>
        </KeyboardAvoidingView>

        <View style = {styles.buttons_container}>
        <Text style = {styles.title}> SignUp To Our Store </Text>
            <TouchableOpacity style ={styles.buttonStyle}
             onPress = {this.signinButton}>
              <Text style = { {color: 'white'} }>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttonStyle}
            onPress = {() => this.props.navigation.navigate('Login')}
            >
              <Text style= { {color: 'white'} }>Return to login screen</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_view:{
        alignContent: 'center',
        flex:1,
        justifyContent : 'center',
        backgroundColor : '#2980b9'
    },
    buttonStyle :{
      alignItems:'center',
      backgroundColor:'#34495e',
      padding:22,
      marginBottom:10,
      
    },
    title :{
      alignSelf:'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    }
    ,
    form_container:{
        
    },
    text_input:{
      height: 40,
      backgroundColor: "rgba(255,255,255,0.3)",
      marginBottom: 20,
    },
    buttons_container:{

    },
});

