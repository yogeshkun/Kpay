import React, { useState } from 'react';
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { Provider as PaperProvider } from 'react-native-paper';
//Screens to navigation


//Navigation 
import BottomNavigator from '../navigation/BottomNavigator';
import Stacknavigation from '../navigation/StackNavigator';

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);


//Redux Store


export default function Home() {
    const [isLogged, setLog] = useState(false)
    return (
        <PaperProvider >
            
                <NavigationContainer theme={DarkTheme}>
                    <Stacknavigation />
                </NavigationContainer>
           
        </PaperProvider>
    );
}

