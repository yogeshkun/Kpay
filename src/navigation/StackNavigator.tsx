import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages 
import Login from '../auth/Login';
import BottomNavigator from './BottomNavigator'
import AppLoading from '../screens/AppLoading'
// import AppLoading from '../screens/AppLoading'
import AsyncStorage from '@react-native-async-storage/async-storage';
//Constant
import Yogesh from '../screens/Customer/Yogesh'
const Stack = createNativeStackNavigator();
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
            name="Login"
            component={Login}
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
