import { StackActions } from '@react-navigation/native';

import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  ActivityIndicator,
  StatusBar

} from 'react-native';

export default function AppLoading({ navigation }) {
  const getData = async () => {
    const token = await AsyncStorage.getItem('token')
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    console.log("isLogged", isLoggedIn)
    
    navigation.dispatch(
        StackActions.replace(isLoggedIn ==='1'?'Logged':'Login')
          );
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


