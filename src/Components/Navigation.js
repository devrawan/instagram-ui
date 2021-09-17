import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import MyInfo from '../Screens/MyInfo';
import Activity from '../Screens/Activity';
import users from './userList.json';
import { Text, Dimensions } from 'react-native';


const FullScreenWidth = Dimensions.get('window').width;
const Stack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function SearchStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search} />
        </Stack.Navigator>
    )
}



function ProfileStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile}  options={{ headerShown: false }}/>
            <Stack.Screen name='MyInfon' component={MyInfo} />
        </Stack.Navigator>
    )
}
function ActivityStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Activity' component={Activity}  />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
    return (
        <NavigationContainer >
            <Tab.Navigator
                     screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home'
                          : 'home-outline';
                      } else if (route.name === 'Activity') {
                        iconName = focused ? 'heart' : 'heart-outline';
                      }else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                      }
                      else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                      }
                    
                      return <Ionicons name={iconName} size={25} color={color}  />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    showLabel:false,
                
                  }}
                  

            >



                <Tab.Screen name="Home" component={HomeStackScreen} />

                <Tab.Screen  name="Search" component={SearchStackScreen} />


                <Tab.Screen  name="Activity" component={ActivityStackScreen} />


                <Tab.Screen name="Profile" component={ProfileStackScreen} />



                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
