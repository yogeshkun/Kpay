import React,{useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import KButtons from '../components/atoms/KButtons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';

function HomePage({ navigation }) {
    function Button(id) {
        console.log(id)
    }
    const [username,setuser] = useState()
    const [isLoggedIn,setisLoggedIn] = useState()
    const getData = async()=>{
        await AsyncStorage.setItem('BottomPage', 'HomePage')
        const username = await AsyncStorage.getItem('username')
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
        setisLoggedIn(isLoggedIn)
        setuser(username)
        // console.log("Hpmepage", username)
     }
    const logout = async()=>{
        await AsyncStorage.clear()
        await AsyncStorage.setItem('isLoggedIn', '0')
        console.log("log out")
        navigation.dispatch(
            StackActions.replace('AppLoading')
          );
        
     }
     
     useEffect(() => {
        getData()
     }, [])

    return (
        <View style={styles.container}>
         <TouchableOpacity>   
            <KButtons
                buttonColor="#536DFE"
                title="SEND"
                buttonStyle={{ width: '90%', alignSelf: 'center' }}
                textStyle={{ fontSize: 20 }}
                onPress={() => Button(3)}
            />
        </TouchableOpacity>
        <Text style={styles.text}>Username - {username}</Text>
        <TouchableOpacity>   
            <KButtons
                buttonColor="#536DFE"
                title="Logout"
                buttonStyle={{ width: '90%', alignSelf: 'center' }}
                textStyle={{ fontSize: 20 }}
                onPress={logout}
            />
        </TouchableOpacity>
        </View>

    );
};

export default HomePage

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
        backgroundColor: 'lightblue',
        flex: 1,

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },
    text:{
        fontSize:20,
        color: 'red'
    }
})