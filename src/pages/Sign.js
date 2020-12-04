/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, ScrollView, Image, Alert } from 'react-native';
import auth from "@react-native-firebase/auth"
import { authStyle } from "./styles"
import logo from "../assets/logo.jpeg";
import { Input, Button } from '../components';
import { resolveAuthError } from '../functions';

function Sign(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [correctionPassword, setCorrectionPassword] = useState("")

    const sign = () => {
        if (email === "" || password === "" || correctionPassword === "") {
            Alert.alert("ClarusChat", resolveAuthError("auth/signUp/null-value"))
        } else if (password === correctionPassword) {

            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => props.navigation.goBack())
                .catch(err => Alert.alert("ClarusChat", resolveAuthError(err.code)))
        } else if (password !== correctionPassword) {
            Alert.alert("ClarusChat", "Passwords are not match")
        }
    }


    return (
        <View style = {{flex:1}}>
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
                            onType={(val) => setEmail(val)}
                        />
                        <Input
                            inputProps={{
                                placeholder: "Type your password...",
                                secureTextEntry: true
                            }}
                            onType={(val) => setPassword(val)}
                        />
                        <Input
                            inputProps={{
                                placeholder: "Type your password again..",
                                secureTextEntry: true

                            }}
                            onType={(val) => setCorrectionPassword(val)}
                        />
                        <Button title="Create account" onPress={sign} />
                        <Button title="Cancel" noBorder onPress={() => props.navigation.goBack()} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export { Sign }