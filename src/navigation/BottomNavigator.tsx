import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState, useEffect } from 'react';
const Tab = createBottomTabNavigator()
import HomePage from '../screens/HomePage'
import Profile from '../screens/Profile'
import Devices from '../screens/Devices'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BottomNavigator() {
  const [BottomPage, setBottomPage] = useState()
  const getData = async (BottomPage) => {
    // await AsyncStorage.setItem('page', 'Devices')
    const page = await AsyncStorage.getItem('BottomPage')

    setBottomPage(page)
    // setisLoggedIn(isLoggedIn)
    // console.log("BottomPage Type", typeof (BottomPage))
    
  }
  useEffect(() => {
    getData(BottomPage)
  }, [])
  return (
    <React.Fragment>
      {
        (BottomPage === undefined)
          ?
          null
          :

          <Tab.Navigator initialRouteName={BottomPage}>
      
            <Tab.Screen
              name="HomePage"
              component={HomePage}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
            />
            <Tab.Screen
              name="Devices"
              component={Devices}

            />
          </Tab.Navigator>



      }
    </React.Fragment>

  )
}