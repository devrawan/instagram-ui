import React from 'react';
import { SafeAreaView ,Text} from 'react-native';


const Account =(props)=>{
    return(
        <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text> {props.textt} </Text>
        </SafeAreaView>
    )
}

export default Account ;