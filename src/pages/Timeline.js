/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import { timelinePage } from "./styles";
import auth from "@react-native-firebase/auth"
import { Header, PostInput, PostItem, TopicSelectModal } from '../components';
import database from "@react-native-firebase/database"
import moment from "moment"


function Timeline() {
    const [postList,setPostList]=useState([])
    const [selectedTopic ,setSelectedTopic]=useState(null)
    const [topicModalFlag,setTopicModalFlag]=useState(true)
    const user = auth().currentUser;

    const selectingTopic=(value)=>{
        database().ref(`/${selectedTopic}/`).off("value")
        setSelectedTopic( `${value}`)
        setTopicModalFlag(false)
        /* .map(key=>({...data[key]})) */
        database()
        .ref(value).on("value",snapshot=>{
            const data=snapshot.val()
            
            const formattedData= data? Object.keys(data).map(key=>({...data[key]})):[]
            formattedData.sort((a,b)=>{
                return new Date(b.time)-new Date(a.time)})
            setPostList(formattedData)
        })
    }

    const sendingPost=(value)=>{
        const postObject={
            userMail:user.email,
            postText:value,
            time:moment().toISOString()
        }

        database().ref(`${selectedTopic}`).push(postObject)
    }

    const renderPosts=({item})=><PostItem post={item}/>
    return (
        <View style={timelinePage.container}>
            <View style={timelinePage.container}>
                <Header
                title={selectedTopic}
                onTopicModalSelect={()=>setTopicModalFlag(true)}
                onLogOut={()=>auth().signOut()}
                />
                <FlatList
                data={postList}
                renderItem={renderPosts}
                keyExtractor={(_,index)=>index.toString()}
                />
                <PostInput
                onSendPost={val=>sendingPost(val)}
                />
                <TopicSelectModal
                visibility={topicModalFlag}
                onClose={ ()=>setTopicModalFlag(selectedTopic? false:true)}
                onTopicSelect={selectingTopic}

                />
            </View>
        </View>
    )
}

export { Timeline }