/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, Image, Alert } from 'react-native';
import auth from "@react-native-firebase/auth"
import { authStyle } from "./styles"
import logo from "../assets/logo.jpeg";
import { Input, Button } from '../components';
import { resolveAuthError } from '../functions';


function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (email === "" || password === "") {
            Alert.alert("ClarusChat", resolveAuthError("auth/null-value"))
        } else {

            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => props.navigation.navigate("Timeline"))
                .catch(err => Alert.alert("ClarusChat", resolveAuthError(err.code)))
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#cfd8dc" }} >
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={authStyle.container}>
                        <Image
                            style={authStyle.logo}
                            source={logo}
                        />
                        <Text style={authStyle.logoText}>ClarusChat</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input
                            inputProps={{
                                placeholder: "Type your e mail",
                                keyboardType: "email-address",

                            }}
                            onType={value => setEmail(value)}
                        />
                        <Input
                            inputProps={{
                                placeholder: "Type your password",
                                secureTextEntry: true
                            }}
                            onType={value => setPassword(value)}
                        />
                        <Button title="Sign In" onPress={login} />
                        <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate("Sign")} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export { Login }