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

export default function Device() {
    const getData = async () => {
        await AsyncStorage.setItem('BottomPage', 'Devices')
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
            <Text> Device</Text>
        </>
    )
}



const styles = StyleSheet.create({

})



// import React, { Component } from 'react'
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     useColorScheme,
//     View,
//     Platform
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // import React, { Component } from 'react';
// import PushNotificationIOS from 'react-native';
// import PubNubReact from 'pubnub-react';
// var PushNotification = require('react-native-push-notification');

// const instructions = Platform.select({

//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload, \n' +
//         'Shake or press menu button for dev menu',

// });
// // type Props = {};
// export default class Devices extends Component{
//     constructor(props) {
//         super(props);
//         this.pubnub = new PubNubReact({
//             publishKey: 'pub-c-039a6fc4-b208-433f-9191-fd4fc4c6f629',
//             subscribeKey: 'sub-c-9609f6f4-50f4-11ec-9668-6eac75df5fc1'
//         });
//         this.pubnub.init(this);
//         PushNotification.configure({
//             // Called when Token is generated.
//             onRegister: function (token) {
//                 console.log('TOKEN:', token);
//                 if (token.os == "ios") {
//                     this.pubnub.push.addChannels(
//                         {
//                             channels: ['notifications'],
//                             device: token.token,
//                             pushGateway: 'apns'
//                         });
//                     // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
//                 } else if (token.os == "android") {
//                     this.pubnub.push.addChannels(
//                         {
//                             channels: ['notifications'],
//                             device: token.token,
//                             pushGateway: 'gcm' // apns, gcm, mpns
//                         });
//                     // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
//                 }
//             }.bind(this),
//             // Something not working?
//             // See: https://support.pubnub.com/hc/en-us/articles/360051495432-How-can-I-troubleshoot-my-push-notification-issues-
//             // Called when a remote or local notification is opened or received.
//             onNotification: function (notification) {
//                 console.log('NOTIFICATION:', notification);
//                 // Do something with the notification.
//                 // Required on iOS only (see fetchCompletionHandler docs: https://reactnative.dev/docs/pushnotificationios)
//                 // notification.finish(PushNotificationIOS.FetchResult.NoData);
//             },
//             // ANDROID: GCM or FCM Sender ID
//             senderID: "663076288251",
//         });
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Welcome to React Native</Text>
//                 <Text style={styles.instructions}>To get started, edit App.js</Text>
//                 <Text style={styles.instructions}>{instructions}</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {

//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center', 
//         backgroundColor: '#F5FCFF',

//     },
//     welcome: {

//         fontSize: 20, 
//         textAlign: 'center',
//         margin: 10,
        
//         }, 
//         instructions: {

//             textAlign: 'center', 
//             color: '#333333',
//             marginBottom:5,
//         }
// })