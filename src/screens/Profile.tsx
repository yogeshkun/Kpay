import React,{useEffect} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
  } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({navigation}) {
    const getData = async () => {
        await AsyncStorage.setItem('BottomPage', 'Profile')
        // const token = await AsyncStorage.getItem('token')
        // const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
        // setisLoggedIn(isLoggedIn)
        // console.log(isLoggedIn)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Text> Profile</Text>
            <Button title ="Click Me" onPress={()=> navigation.navigate("Yogesh")}/>
        </>
    )
}



const styles = StyleSheet.create({

})