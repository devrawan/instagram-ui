import React from 'react';
import { Button, SafeAreaView ,Text} from 'react-native';


const Saved =( { navigation,route})=>{
    return(
        <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <Text> Saved Screen </Text>
            <Button title="logout" onPress = {()=>{
                        navigation.replace('Splash');
            }} ></Button>

            
        </SafeAreaView>
    )
}

export default Saved ;