import React  ,{useState}from 'react';
import { SafeAreaView, ScrollView, Image } from 'react-native';
import {
    FlatList,
    AddIcon,
    Container,
    Header,
    Content,
    Thumbnail,
    Left,
    Text,
    Right,
    Center,
    NativeBaseProvider,
    View,
} from "native-base"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Story from '../Components/Story';
import Post from '../Components/Post';
import users from '../Components/userList.json'


const Home = () => {
    const ar=[]
    users.map((item,index)=>{
ar.push(item)
    })
   
    // console.log("hhhh")
     console.log(ar)
    return (
        <NativeBaseProvider>
            <SafeAreaView >
                <View style={{ flex: 1, flexDirection: 'column' }}>

                    <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between', paddingStart: 5, paddingEnd: 8 }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png' }} style={{
                                height: 40,
                                width: 130
                            }} />

                        </View>

                        <View style={{ justifyContent: 'center', paddingRight: 5, paddingTop: 5 }}>
                            <Ionicons name="navigate" style={{ fontSize: 28 }}></Ionicons>
                        </View>
                    </View>
                    <View style={{ height: 110 }}>
                        <Story />
                    </View>
                    <View style={{ height: 800 }}>
                        <ScrollView style={{  height: 600 }}>

                            {users.map((item, index) => (
                                <Post  likes={item.likes} name={item.user} url={item.url}   post={item.post} date={item.Date} index={index}/>
                                 
                            ))}

                        </ScrollView>
                    </View>











                </View>

            </SafeAreaView>
        </NativeBaseProvider>
    );
}

export default Home;


