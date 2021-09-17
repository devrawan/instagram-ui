import React from 'react';
import users from '../Components/userList.json'
import { View, SafeAreaView, Text ,Button} from 'react-native';
import { Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { backgroundColor, flexDirection, fontWeight } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';
import { map } from 'async';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Input } from 'native-base';
import Post from '../Components/Post'


 {/* <ScrollView style={{  height: 600 }}>
                {arr.map((item, index) => (
                <Post name={item.user} url={item.url}  liked={item.liked} post={item.post} date={item.Date} index={index}/>

            ))} */}
var arr=users.filter(item => item.liked === true);
const Activity =(props)=>{

    return(
        
        <View style={{ height: 800 }}>
            <ScrollView>
       {arr.map((item, index) => (

        <View style={{ width: 400, height: 300, backgroundColor: 'black' ,marginVertical:4}}>
        <Image source={{ uri: item.url}} style={{ width: 400, height: 300 }} />
      </View>
       ))} 
        </ScrollView>
    </View>
    )
}

export default Activity ;