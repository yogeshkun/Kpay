import React, { useState } from 'react';
import { NavigationContainer, DarkTheme } from "@react-navigation/native"
import { Provider as PaperProvider } from 'react-native-paper';
//Screens to navigation
import { NativeBaseProvider} from 'native-base';

//Navigation 
import Stacknavigation from '../navigation/StackNavigator';

// const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);


//Redux Store


export default function Home() {
    return (
        
            <NativeBaseProvider>
                
                    <NavigationContainer >
                        <Stacknavigation />
                    </NavigationContainer>
                
            </NativeBaseProvider>
       
    );
}


