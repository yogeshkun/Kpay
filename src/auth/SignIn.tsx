
// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch, useSelector } from "react-redux";
// import { LoginMembers } from '../redux/actions/LoginActions'
// import axios from 'axios';
// import { StackActions } from '@react-navigation/native';
// import {
//    Button,
//    Text,
//    View,
//    TextInput,
//    StyleSheet,
//    TouchableOpacity,


// } from 'react-native';

// export default function HomeScreen({ navigation }) {
//    const state = useSelector((state) => state.LoginReducer);
//    const [error, setError] = useState({ status: '', error: '' })
//    const [body, setBody] = useState("sd")
//    const [school, setschool] = useState("School")
//    const [fake, setfake] = useState("fake")

//    console.log("State", body)
//    const dispatch = useDispatch();

//    const [username, setuser] = useState("")
//    const [password, setpass] = useState("")
//    const data = { name: username, password: password, token: 'S1BBWU1PQklMRUFQUElOVEVHUkFUSU9O' }

//    const Login = async (data) => {

//          axios.get(`http://113.193.243.85:8060/KPayAPI/LoginAPIJSON?token=${data.token}&username=${data.name}&password=${data.password}`)
//             .then(response => {
//                // console.log(response.data)
//             if (response.data.status === 'Success') {
//                setError({ status: 'Success', error: response.data.status })
//                dispatch(LoginMembers(response.data))
//                setData(response.data)
//                navigation.dispatch(
//                   StackActions.replace('Logged')
//                );
//                // navigation.pop()

//             } else {
//                setError({ status: 'Failure', error: response.data.status })
//             }

//          },
//          )
//          .catch(error =>
//             setError({ status: 'Failure', error: error }),
//          )

//    }



//    const setData = async (data) => {
//       await AsyncStorage.setItem('isLoggedIn', '1')
//       await AsyncStorage.setItem('username', data.memberInfo.UserName)
//    }
//    const getData = async () => {
//       const token = await AsyncStorage.getItem('token')
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
//       console.log("isLoggedIn", isLoggedIn)

//    }
//    useEffect(() => {
//       getData()

//    }, [])
//    return (
//       <View style={styles.container}>
//          <TextInput style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="Email"
//             placeholderTextColor="#9a73ef"
//             autoCapitalize="none"
//             onChangeText={(event) => setuser(event)}
//          />

//          <TextInput style={styles.input}
//             underlineColorAndroid="transparent"
//             placeholder="Password"
//             placeholderTextColor="#9a73ef"
//             autoCapitalize="none"
//             onChangeText={(event) => setpass(event)}
//          />

//          <TouchableOpacity
//             style={styles.submitButton}

//             onPress={() => Login(data, setData)}
//          >
//             <Text style={styles.submitButtonText}> Submit </Text>

//          </TouchableOpacity>

//          <Text> {error.status}</Text>
//       </View>
//    )
// }


// const styles = StyleSheet.create({
//    container: {
//       paddingTop: 23
//    },
//    input: {
//       margin: 15,
//       height: 40,
//       borderColor: 'blue',
//       borderWidth: 1,
//       color: 'white'
//    },
//    submitButton: {
//       backgroundColor: '#7a42f4',
//       padding: 10,
//       margin: 15,
//       height: 40,
//    },
//    submitButtonText: {
//       color: 'red'
//    }
// })
// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
   StyleSheet,
   Text,
   View,
   Image,
   TextInput,
   Button,
   TouchableOpacity,
} from "react-native";


import translate from 'translate-google-api';
// const getTra = async () => {
//    const a = "What is your Name"
//    const result = await translate(a, { to: 'hi' }).then(res => {
//       // console.log(res);
//       //=> I speak English
//       // console.log(res.from.language.iso);
//       //=> nl
//    }).catch(err => {
//       console.error(err);
//    });

// }


export default function HomeScreen({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [trans,setla] = useState(false);
   const [words,setwo] = useState("Yogesh");
   // const [refs,setref] = useState(useRef(null));
   useEffect(() => {
      // getTra();
   })
   //   const translate = require('google-translate-api');
   const refs = useRef(null);
   function Log(refs){
      // console.log(refs.current._internalFiberInstanceHandleDEV._debugOwner.child.pendingProps.children)
      // refs.current._internalFiberInstanceHandleDEV.memoizedProps.children = "Yogesh"
      //_children
      // translate(refs.current._internalFiberInstanceHandleDEV.pendingProps.children, { to: 'hi' })
      // .then(res => {
      //    console.log(res);
         setla(true)
         // setwo("Yogesh")
      // }).catch(err => {
      //    console.error(err);
      // });

   }
   console.log("fkljsdl",trans)
   return (
      <View style={styles.container}>
         <Image style={styles.image} source={require("../assets/images/kpay-logo-signature-01.jpg")} />

         {/* <StatusBar style="auto" /> */}
         {
            trans?<Text ref={refs} style={styles.Text}> UserName </Text>:<Text ref={refs} style={styles.Text}> Yogesh </Text>
         }
         {/* <Text ref={refs} style={styles.Text}> Where are you </Text> */}
         <View style={styles.inputView}>
         

            <TextInput
               style={styles.TextInput}
               //  placeholder="Email"
               placeholderTextColor="#003f5c"
               onChangeText={(email) => setEmail(email)}
            />
         </View>
         <Text style={styles.Text}> {refs.current}</Text>
         <View style={styles.inputView}>

            <TextInput
               style={styles.TextInput}
               //  placeholder="Password."
               placeholderTextColor="#003f5c"
               secureTextEntry={true}
               onChangeText={(password) => setPassword(password)}
            />
         </View>

         <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.loginBtn} onPress={()=>Log(refs)}>
            <Text style={styles.loginText}>LOGIN</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },

   image: {
      marginBottom: 40,
   },

   inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
   },

   TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
   },

   forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'black',
      alignItems: "center",
      justifyContent: "center",
   },

   loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
   },
   Text: {
      color: 'black',
      alignItems: "center",
      justifyContent: "center",


   }
});