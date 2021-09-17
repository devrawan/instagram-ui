import React, { useState } from 'react';
import { View, SafeAreaView, Text ,Button} from 'react-native';
import { Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { backgroundColor, flexDirection, fontWeight } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';
import { map } from 'async';
import Ionicons from 'react-native-vector-icons/Ionicons';
//EvilIcons
//Entypo
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import users from './userList.json'
import { Input } from 'native-base';

const  com =['rawan','alaa','kkkkk'];

const Post = (props) => {
  const [like, setlik] = useState(false)
  const [saved, setSaved] = useState(false)
  const [text, onChangeText] = useState('')




  function handlelike() {
    setlik(!like)
    console.log(props.index);
     console.log(like ? 'false' :'true')
  }

  function handlesaved() {
    setSaved(!saved)
  }



const  show=()=>{
com.push(text);
console.log(com)
{com.map((item,key)=>(<Text  key={key} style={{ paddingHorizontal: 12, alignItems: 'center', color: 'black', paddingTop: 5 }}>lllllll</Text>))}
 onChangeText('')
}
 

  return (

    <View style={{ marginVertical: 5 }}>

      <View style={{ flexDirection: 'row', paddingStart: 12, paddingEnd: 12, paddingVertical: 8 }}>
        <LinearGradient colors={["#bc2a8d", "#e95950", "#fccc63"]} style={{ padding: 2, borderRadius: 50 }}>
          <Image source={{ uri: props.url }} style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }} />
        </LinearGradient>
        <View style={{ width: 320, flexDirection: 'row', paddingVertical: 12, paddingHorizontal: 12, justifyContent: 'space-between' }}>
          <Text style={{ textAlign: 'center', fontSize: 16, justifyContent: 'center' }}>{props.name}</Text>
          <Ionicons name="ellipsis-vertical" style={{ fontSize: 20 }}></Ionicons>
        </View>
      </View>
      <View style={{ width: 400, height: 300, backgroundColor: 'black' }}>
        <Image source={{ uri: props.url }} style={{ width: 400, height: 300 }} />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, paddingHorizontal: 12, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 110 }}>
          <TouchableOpacity onPress={handlelike}>
            <Ionicons name={like === true ? 'heart' : 'heart-outline'}
              color={like === true ? '#A82A00' : ''}
              style={{ fontSize: 28 }}
            ></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="comment" style={{ fontSize: 30, fontWeight: 'bold' }}></EvilIcons>
          </TouchableOpacity>
          <Ionicons name="navigate-outline" style={{ fontSize: 25 }}></Ionicons>
        </View>

        <View>
          <TouchableOpacity onPress={handlesaved}>

            <Ionicons name={saved ? "bookmark" : "bookmark-outline"} 
            style={{ fontSize: 28 }}></Ionicons>
            
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ alignItems: 'center', fontWeight: 'bold', paddingHorizontal: 12 }}>{ props.likes} likes</Text>


      <Text style={{ alignItems: 'center', paddingHorizontal: 12 }}> {props.name} : {props.post}</Text>

<View style={{flexDirection:'row' , justifyContent:'space-between',marginHorizontal:8}}>
      <TouchableOpacity style={{marginTop:10}}>
        <TextInput
          onChangeText={text => {
            onChangeText(text);
            
          }}
          value={text}
          variant="unstyled"
          w="100%"
          size="sm"
          placeholder="  Add Comment.."
          _light={{
            placeholderTextColor: "blueGray.400",
          }}
          _dark={{
            placeholderTextColor: "blueGray.50",
          }}
        /> 
        </TouchableOpacity>

        <TouchableOpacity >
      <Button title="post" color="black" onPress={show}/></TouchableOpacity>
</View>

 
<View>
   {com.map((item,key)=>(<Text  key={key} style={{ paddingHorizontal: 12, alignItems: 'center', color: 'black', paddingTop: 5 }}>{item}</Text>))}
   </View> 
      <Text style={{ paddingHorizontal: 12, alignItems: 'center', color: 'gray', paddingTop: 5 }}>{props.date} see translation..</Text>
    </View>
  )
}

export default Post;