/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { post_input } from "./styles"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const PostInput = (props) => {
    const [postText, setPostText] = useState()
    return (
        <View style={post_input.container}>
            <View style={post_input.inputContainer}>
                <TextInput
                    multiline
                    placeholder="Type Something"
                    onChangeText={val => setPostText(val)}
                />
            </View>
            <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={() => props.onSendPost(postText)}
            >
                <Icon
                    name="telegram"
                    size={30}
                    color="#69007f"
                    onPress={props.onTopicModalSelect}
                />
            </TouchableOpacity>
        </View>
    )
}

export { PostInput }
