
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { LoginMembers } from '../redux/actions/LoginActions'
import axios from 'axios';
import { StackActions } from '@react-navigation/native';
import {
   Button,
   Text,
   View,
   TextInput,
   StyleSheet,
   TouchableOpacity,


} from 'react-native';

export default function HomeScreen({ navigation }) {
   const state = useSelector((state) => state.LoginReducer);
   const [error, setError] = useState({ status: '', error: '' })
   const [body, setBody] = useState("sd")
   const [school, setschool] = useState("School")
   const [fake, setfake] = useState("fake")

   console.log("State", body)
   const dispatch = useDispatch();

   const [username, setuser] = useState("")
   const [password, setpass] = useState("")
   const data = { name: username, password: password, token: 'S1BBWU1PQklMRUFQUElOVEVHUkFUSU9O' }

   const Login = async (data) => {

         axios.get(`http://113.193.243.85:8060/KPayAPI/LoginAPIJSON?token=${data.token}&username=${data.name}&password=${data.password}`)
            .then(response => {
               // console.log(response.data)
            if (response.data.status === 'Success') {
               setError({ status: 'Success', error: response.data.status })
               dispatch(LoginMembers(response.data))
               setData(response.data)
               navigation.dispatch(
                  StackActions.replace('Logged')
               );
               // navigation.pop()
               
            } else {
               setError({ status: 'Failure', error: response.data.status })
            }

         },
         )
         .catch(error =>
            setError({ status: 'Failure', error: error }),
         )

   }



   const setData = async (data) => {
      await AsyncStorage.setItem('isLoggedIn', '1')
      await AsyncStorage.setItem('username', data.memberInfo.UserName)
   }
   const getData = async () => {
      const token = await AsyncStorage.getItem('token')
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
      console.log("isLoggedIn", isLoggedIn)

   }
   useEffect(() => {
      getData()

   }, [])
   return (
      <View style={styles.container}>
         <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(event) => setuser(event)}
         />

         <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(event) => setpass(event)}
         />

         <TouchableOpacity
            style={styles.submitButton}

            onPress={() => Login(data, setData)}
         >
            <Text style={styles.submitButtonText}> Submit </Text>

         </TouchableOpacity>
         
         <Text> {error.status}</Text>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      color: 'white'
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'red'
   }
})