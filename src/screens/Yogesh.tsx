import React,{useEffect} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Yogesh() {
    // const getData = async () => {
    //     await AsyncStorage.setItem('BottomPage', 'Profile')
    //     // const token = await AsyncStorage.getItem('token')
    //     // const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
    //     // setisLoggedIn(isLoggedIn)
    //     // console.log(isLoggedIn)
    // }
    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <>
            <Text style={styles.text}> Yogesh</Text>
        </>
    )
}



const styles = StyleSheet.create({
    text:{
        color:"red",
        
    }
})