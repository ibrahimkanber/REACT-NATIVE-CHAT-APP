/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login,Timeline,Sign} from "./pages";
import auth from "@react-native-firebase/auth"

const Stack=createStackNavigator()


const Router = () => {
    const [hasSession,setSession]=useState(false)

    useEffect(()=>{
      auth().onAuthStateChanged((user)=>{
          setSession(user)
      })
    })

    return (
    
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
            initialRouteName="Timeline"
            >
            {
                hasSession?
                (<Stack.Screen name="Timeline" component={Timeline}/>) :
               
                ( <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={Sign} /> 
                 </>
                )
               


            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router