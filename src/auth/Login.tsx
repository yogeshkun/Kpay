
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import axios from 'axios';
export default function HomeScreen({ navigation }) {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState({ status: '', error: '' })
    const data = { name: username, password: password, token: 'S1BBWU1PQklMRUFQUElOVEVHUkFUSU9O' }
    const Login = async (data) => {
        // console.log("data",data)
        // axios.get(`http://113.193.243.85:8060/KPayAPI/LoginAPIJSON?token=${data.token}&username=${data.name}&password=${data.password}`)
        //     .then(response => {
        //         // console.log(response.data)
        //         if (response.data.status === 'Success') {
        //             console.log("Sucess")
        //             setError({ status: 'Success', error: response.data.status })
        //             //    dispatch(LoginMembers(response.data))
        //             setData(response.data)
        //             navigation.dispatch(
        //                 StackActions.replace('Logged')
        //             );
        //             // navigation.pop()

        //         } else {
        //             console.log("fail")
        //             setError({ status: 'Failure', error: response.data.status })
        //         }

        //     },
        //     )
        //     .catch(error =>
        //         setError({ status: 'Fail', error: error }),
               
        //     )
        navigation.dispatch(
            StackActions.replace('Logged')
        );

    }



    const setData = async (data) => {
        await AsyncStorage.setItem('isLoggedIn', '1')
        await AsyncStorage.setItem('username', data.memberInfo.UserName)
    }
    const getData = async () => {
        //   const token = await AsyncStorage.getItem('token')
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
        console.log("isLoggedIn", isLoggedIn)

    }
    useEffect(() => {
        //   getData()

    }, [])
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/kpay-logo-signature-01.jpg")} />


            <Text style={styles.Text}> UserName: </Text>
            <View style={styles.inputView}>


                <TextInput
                    style={styles.TextInput}
                    //  placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setEmail(username)}
                />
            </View>
            <Text style={styles.Text}> Password: </Text>
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
            <Text style={styles.forgot_button}>
                {error.status}
            </Text>

            <TouchableOpacity style={styles.loginBtn} onPress={() => Login(data, setData)}>
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