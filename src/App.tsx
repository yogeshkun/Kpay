import 'react-native-gesture-handler'
import React from 'react'
import Home from './screens/index'
import { Provider } from 'react-redux';
import store from './redux/store/Store'
function App() {
  return (
    <Provider store={store}>
       <Home/>
    </Provider>
  )
}

export default App
