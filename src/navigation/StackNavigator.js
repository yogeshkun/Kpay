import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages 
import SignIn from '../auth/SignIn';
import BottomNavigator from './BottomNavigator'
// import AppLoading from '../screens/AppLoading'
import AsyncStorage from '@react-native-async-storage/async-storage';
//Constant
import { StackActions } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar

} from 'react-native';
export function AppLoading({ navigation }) {
  const getData = async () => {
    const token = await AsyncStorage.getItem('token')
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    console.log("isLogged", isLoggedIn)
    
    navigation.dispatch(
        StackActions.replace(isLoggedIn ==='1'?'Logged':'SignIn')
          );
    // navigation.navigate(isLoggedIn ==='1'?'Logged':'SignIn')
  }
  useEffect(() => {
    getData()

  }, [])
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />

    </View>
  )
}




export default function Stacknavigation() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [spage, setPage] = useState(
    AsyncStorage.getItem('isLoggedIn')
  )

  console.log(spage)


  const getData = async () => {

    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    console.log("isLoggedIn", isLoggedIn)
  }
  useEffect(() => {
    getData()

  }, [])
  return (



    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        }

      }}
    >
          <Stack.Screen
            name="AppLoading"
            component={AppLoading}
            options={{ headerShown: false }}
          >

          </Stack.Screen>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          >

          </Stack.Screen>

          <Stack.Screen
            name="Logged"
            component={BottomNavigator}
            options={{ headerShown: false }}
          >
          </Stack.Screen>



     

    </Stack.Navigator>




  );
}
