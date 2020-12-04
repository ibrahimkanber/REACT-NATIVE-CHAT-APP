/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {button,button_outline} from "./styles"
const Button=(props)=> {
    const style=props.noBorder ? button_outline:button
    return (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <Text style={style.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export {Button}
