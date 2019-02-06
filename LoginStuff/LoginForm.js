import React, { Component } from 'react'
import {View,Text, StyleSheet,  TouchableOpacity, TextInput, KeyboardAvoidingView, JSON, NavigatorIOS} from 'react-native'
import {createStackNavigator, createAppNavigator} from 'react-navigation'

const BaseLink = 'http://192.168.100.3:1234/'; 

const links_shoes = {
              preview : BaseLink + 'shoes/preview',//just with get
              //SERIOUS SHIT STARTS NOW :)
              create: BaseLink + 'shoes/create',
              //delete: BaseLink + '/shoes/delete'  --> THIS REQUIRES ID TO BE ADDED
              }


const links_users = {login : BaseLink + 'user/login',
                    signUp : BaseLink + 'user/signUp'};



export default class LoginForm extends Component {


  constructor(props){
    super(props)
    this.state = {
      username : '',
      password :''
    }
  }
  onPressSignUp = () =>{
    
  }

  // onPressLogin = () =>{
  //   fetch(links_users.login,{
  //     method : "POST",
  //     Accept : 'application/json',
  //     'Content-Type': 'application/json'
  //   })
  //   .then((res) => res.json())
  //   .then((resJson) => {
  //     console.log("Merge");
  //   })
  // }
  onPressLoginButton = () =>{
    fetch(links_users.login, {
      method : 'POST',
      headers : {
        Accept:'application/json','Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
  };

  onPressRegisterButton = () =>{
    fetch(links_users.signUp, {
      method : 'POST',
      headers:{
        Accept:'application/json','Content-Type' : 'application/json'
      },
      body:JSON.stringify({
      })
    })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container} >
          <TextInput
              style ={styles.input}
              placeholder= 'Username'
              ref= {(el) => { this.username = el; }}
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              returnKeyType = 'next'
              onSubmitEditing={() => { this.password.focus(); }}>
          </TextInput>
      
          <TextInput
              style ={styles.input}
              secureTextEntry
              placeholder= 'Password' 
              ref= {(el) => { this.password = el; }}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              returnKeyType = 'done'>
          </TextInput>
            
          <TouchableOpacity 
              style={styles.loginButton}
              onPress = {this.onPressLoginButton}>
              <Text style = {{color:'#ecf0f1'}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity 
              style={styles.signUpButton}
              onPress = {
                () => navigate("SignUp")
              }>
              <Text style={{color : '#ecf0f1'}}>Register</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor:'#3498db',
    
    },
    input: {
      height: 40,
      backgroundColor: "rgba(255,255,255,0.3)",
      marginBottom: 20,
    },
    loginButton:{
      alignItems:'center',
      backgroundColor:'#2c3e50',
      padding:22,
      marginBottom:10
    },
    signUpButton:{
      alignItems:'center',
      backgroundColor:'#34495e',
      padding:22,
      marginBottom:10
    }
})

//export default LoginForm;