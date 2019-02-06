import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TextInput,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import LoginForm from './LoginForm'


const BaseLink = 'http://192.168.100.3:1234/'; 

const links_shoes = {
              preview : BaseLink + 'shoes/preview',//just with get
              //SERIOUS SHIT STARTS NOW :)
              create: BaseLink + 'shoes/create',
              //delete: BaseLink + '/shoes/delete'  --> THIS REQUIRES ID TO BE ADDED
              }


const links_users = {login : BaseLink + 'user/login',
                    signUp : BaseLink + 'user/signUp'};


export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password :''
    }
  }

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
    return (
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image
            style={styles.image}

            source={require('../assets/logo.jpg')}
            />
          </View>

          <KeyboardAvoidingView behavior='padding' enabled style={styles.formcontainer}>
          <View style = {styles_form.container} >

                <TextInput
                    style ={styles_form.input}
                    placeholder= 'Username'
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    returnKeyType = 'next'
                    onSubmitEditing={() => { this.password.focus(); }}>
                </TextInput>
            
                <TextInput
                    style ={styles_form.input}
                    secureTextEntry
                    placeholder= 'Password' 
                    ref= {(el) => { this.password = el; }}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    returnKeyType = 'done'>
                </TextInput>
                  
                <TouchableOpacity 
                    style={styles_form.loginButton}
                    onPress = {this.onPressLoginButton}>
                    <Text style = {{color:'#ecf0f1'}}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles_form.signUpButton}
                    onPress = {
                      () => navigate("SignUp")
                    }>
                    <Text style={{color : '#ecf0f1'}}>Register</Text>
                </TouchableOpacity>
            </View>
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

 
const styles_form = StyleSheet.create({
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
 //export default Login;