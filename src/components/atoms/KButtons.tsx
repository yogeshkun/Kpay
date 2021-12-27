import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
const KButtons =({
    title,
    onPress,
    buttonColor,
    titleColor,
    buttonStyle,
    textStyle,
    })=>{
    
    return (
        <>
            <TouchableOpacity
                // This here
                style={{ ...styles.container, ...buttonStyle, backgroundColor: buttonColor || '#512DA8' }}
                onPress={onPress}
            >
                <Text style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}> {title} </Text>
            </TouchableOpacity>
        </>
    )
}

export default KButtons
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#512DA8',
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        color: '#fff',
        fontSize: 16,
      },
})
//     < KButtons
// buttonColor = "#4DB6AC"
// titleColor = "#000"
// title = "DONE"
// buttonStyle = {{ width: '80%', alignSelf: 'center' }}
// textStyle = {{ fontSize: 20 }}
// onPress = {() => console.log('I am the second button')}
// />

//     < KButtons
// buttonColor = "#9C27B0"
// titleColor = "#FFF"
// title = "DONE"
// buttonStyle = {{ width: '60%', alignSelf: 'center' }}
// textStyle = {{ fontSize: 20 }}
// onPress = {() => console.log('I am the third button')}
// />

//     < KButtons
// buttonColor = "transparent"
// titleColor = "#000"
// title = "CANCEL"
// buttonStyle = {{
//     width: '40%',
//         alignSelf: 'center',
//             borderWidth: 1,
//                 borderColor: '#1c1c1c',
//                     borderRadius: 6,
//         }}
// textStyle = {{ fontSize: 20 }}
// onPress = {() => console.log('I am the fourth button')}
// />