/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { header } from "./styles";

const Header = (props) => {
  
    return (
        <View style={header.container}>
            <View style={header.textContainer}>
                <Text style={header.text}>#{props.title}</Text>
            </View>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
                <Icon
                name="hexagon-multiple"
                size={30}
                color="#69007f"
                 onPress={props.onTopicModalSelect}
                /> 
                 <Icon name="login" size={30}  color="#69007f" onPress={props.onLogOut}/> 
            </View>
        </View>
    )
}

export { Header }
