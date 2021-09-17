import React from 'react';
import {
    Text,
    View,
} from "native-base"

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { backgroundColor, fontWeight } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';
import users from './userList.json'
import { map } from 'async';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Story = (props) => {

    return (

        <ScrollView style={{ flex: 1 ,marginLeft:6}} horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ padding: 7 }}>
                <Image
                    source={{ uri: 'https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg' }}
                    style={styles.userImg} />
                <View style={{ position: 'absolute' }}>
                    <View style={styles.container}>
                        <Ionicons name="add" style={styles.addbtn}></Ionicons>
                    </View>

                    <Text style={[styles.userName,{textTransform:'capitalize'}]}>
                        Your Story
                    </Text>
                </View>
            </View>
            {users.map((item, index) => (
                <View style={{ width: 85, padding: 5 }}>
                    <LinearGradient colors={["#bc2a8d", "#e95950", "#fccc63"]} style={{ padding: 2, borderRadius: 50 }}>
                        <Image source={{ uri: item.url }} style={styles.userImg} />
                    </LinearGradient>


                    <Text style={styles.userName}>
                        {item.user}
                      
                    </Text>
                </View>

            ))}


        </ScrollView>

    )

}



var styles = StyleSheet.create({
    userImg: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: "#fff",
        borderWidth: 3,
    },
    userName: {
        textAlign: 'center',
        fontSize: 16,
        textTransform: 'lowercase',
        marginTop: 3

    },
    container: {
        marginTop: 55,
        backgroundColor: '#4c68d7',
        marginLeft: 55,
        width: 23,
        height: 23,
        borderRadius: 50,
        borderWidth: 1.4,
        borderColor: '#ffff',
        justifyContent: 'center'

    },

    addbtn: {
        color: '#ffff',
        textAlign: 'center',
        textAlignVertical: 'center',
         fontSize:12,


    }
});


export default Story;