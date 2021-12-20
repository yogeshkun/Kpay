import React,{useState,useEffect} from 'react'
import {
    Button,
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function AppLoading({ navigation }) {
    const [logged,setLog] = useState()
    const getData = async()=>{
      // const token = await AsyncStorage.getItem('token')
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
      const page = await AsyncStorage.getItem('page')
    //   console.log("App loading - ",isLoggedIn )
      console.log(page)
      if(isLoggedIn==='0'){
        // || isLoggedIn===null
        navigation.push('SignIn')
      }else{
        navigation.push('Logged')
      }
   }
   useEffect(() => {
      getData()
   })
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

export default AppLoading
