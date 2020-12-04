/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment';
import { postitem } from "./styles";

const PostItem = (props) => {
    return (
        <View style={postitem.container}>
            <View style={postitem.headerContainer}>
                <Text style={postitem.username}>{props.post.userMail.split("@")[0]}</Text>
                <Text style={postitem.time}>
                    {moment.duration(moment(props.post.time).diff(moment(new Date()), "seconds"), "seconds",).humanize(true)
                    }</Text>
            </View>
            <View style={postitem.bodyContainer}>
                <Text>{props.post.postText}</Text>
            </View>
        </View>
    )
}

export { PostItem }
