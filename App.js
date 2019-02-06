import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
//import { createStackNavigator, createAppNavigator } from 'react-navigation';
import Login from './LoginStuff/Login'
import SignUp from './LoginStuff/SignUp'
import MainWindow from './MainInterface/MainWindow'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Login},
    SignUp: {screen: SignUp},
  },
  {
    defaultNavigationOptions : {
      headerStyle:{  
        backgroundColor:'#3498db',
      }
    }
  }
);

const App = createAppContainer(MainNavigator);



export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Login/>
//       </View>  
//       );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     alignContent:'center',
//     backgroundColor : '#3498db',
//     justifyContent : 'center',
//     flex: 1,
//     position : 'absolute',top:0,bottom:0,left:0,right:0,
//   }
// })

