import React, { Component } from 'react'
import { TouchableOpacity, Text,View ,StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native'

export class SignUp extends Component {
  render() {
    return (
      <View style = {styles.main_view}>
        <KeyboardAvoidingView style = {styles.form_container}>
            <TextInput>

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

    },

});

