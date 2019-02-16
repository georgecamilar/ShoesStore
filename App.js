import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import MainWindow from "./MainInterface/MainWindow"
import SignUp from "./LoginStuff/SignUp"
import Login from "./LoginStuff/Login"
//classes
//we export the app class as default with the appcontainer
//containing the navigator

export default class App extends Component{
  render(){
    return <AppContainer/>;
  }
}

class Welcome extends Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style= { styles.title }>
          Welcome to the Store
        </Text>

        <Button 
        style = {{backgroundColor:"cyan", margin: 15,}}
        title = {"Login"}
        onPress = {() =>this.props.navigation.navigate('Login')}>

        </Button >

        <Button style = {{backgroundColor:"cyan", margin: 15,}}
        title = {"Register"}
        onPress = {() =>this.props.navigation.navigate('SignUp')}>
        </Button>

        <Image
            style={styles.image}

            source={require('./assets/logo.jpg')}
            />

      </View>
    );
  }
}

//navigators

const AppSwitchNavigator = createSwitchNavigator({
  Welcome : { screen: Welcome},
  MainWindow : { screen : MainWindow },
  Login : {screen : Login},
  SignUp: {screen : SignUp}
},
) 

const AppContainer = createAppContainer(AppSwitchNavigator);

//styles

const styles = StyleSheet.create({
  container:{
    alignContent:'center',
    backgroundColor : '#3498db',
    justifyContent : 'center',
    flex: 1,
    position : 'absolute',top:0,bottom:0,left:0,right:0,
  },
  title:{
    marginTop: 2,
    alignSelf: 'center',
    fontSize: 20,
    fontStyle: 'normal',
  },
  image:{
    alignSelf:"center",
    width:220,
    height:220
    
  }
})

