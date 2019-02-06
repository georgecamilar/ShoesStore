import React, { Component } from 'react'
import { TouchableOpacity, Text,View ,StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native'

export default class SignUp extends React.Component {
    
  render() {
    return (
      <View style = {styles.main_view}>
        <KeyboardAvoidingView style = {styles.form_container}>
            <TextInput style = {styles.text_input}>

            </TextInput>
        </KeyboardAvoidingView>

        <View style = {styles.buttons_container}>
            <TouchableOpacity >

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
    form_container:{
        
    },
    text_input:{

    },
    buttons_container:{

    },
});

