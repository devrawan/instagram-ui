import React from 'react';
import { SafeAreaView, Text, View, Image, Button, TouchableOpacity,StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Profile = ({navigation}) => {
    return (
        <SafeAreaView >
            <View style={styles.header}>
                <Text style={styles.left}>rawan.radwan2000</Text>
                <View style={styles.right}>
                    <Ionicons name="ios-add-circle" style={{ paddingVertical: 8, fontSize: 28 }}></Ionicons>
                    <Entypo name="menu" style={{ paddingVertical: 6, fontSize: 30 }}></Entypo>
                </View>
            </View>
            <View style={styles.box1}>
                <View>
                    <LinearGradient colors={["#bc2a8d", "#e95950", "#fccc63"]} style={{ borderRadius: 50 }}>
                        <Image source={{ uri: 'https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg' }} 
                        style={styles.imgStyle} />
                    </LinearGradient>
                </View>
                <View style={styles.num}>
                    <Text style={styles.textt}>85</Text>
                    <Text>Posts</Text>
                </View>

                <View style={styles.num}>
                    <Text style={styles.textt}>674</Text>
                    <Text>Followers</Text>
                </View>

                <View style={styles.num}>
                    <Text style={styles.textt}>1,345</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Text>RAWAN RADWAN</Text>
                <Text>Software Developer</Text>
                <Text>IUG | level 4</Text>
                <Text>D.B | 23 Oct 2000</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ backgroundColor: "white", width: 325, marginLeft: 7, marginVertical: 10 }}>
                    <Button title='Edit profile' color="black"></Button>
                </TouchableOpacity>

                <MaterialIcons name="keyboard-arrow-down" style={{ fontSize: 20, paddingHorizontal: 12, paddingVertical: 12, marginVertical: 10, backgroundColor: 'white', borderRadius: 20, marginRight: 7 }}></MaterialIcons>

            </View>
            <Button title='go to info' onPress={()=>{navigation.navigate('MyInfon')}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

num:{
    paddingVertical: 30 
},
textt:{
    fontWeight: 'bold', 
    paddingVertical: 4, 
    fontSize: 20 
},
info:{
    paddingHorizontal: 8 
},
imgStyle:{
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 3,
},
header:{
    height: 40, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingStart: 5,
     paddingEnd: 8 
}
,
left:{
    fontSize: 25, 
    fontWeight: 'bold', 
    alignItems: 'center', 
    paddingVertical: 7 
},
right:{
    flexDirection: 'row', justifyContent: 'space-between', width: 70 
},
box1:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingStart: 3, 
    paddingEnd: 3,
     marginVertical: 8 
}
});




export default Profile;