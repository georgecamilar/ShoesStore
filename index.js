import React from 'react';

import { Navigation } from 'react-native-navigation'

import Login from './LoginStuff/Login'
import SignUp from './LoginStuff/SignUp'


Navigation.registerComponent("Login", ()=> Login)
Navigation.registerComponent("SignUp", ()=> SignUp)

Navigation.events().registerAppLaunchedListener( () =>{
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AppStack',
                children: [
                    {
                        component: {
                            name: "Login"
                        }
                    }
                ]
            }
        }
    })
})