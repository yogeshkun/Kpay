import LoginReducer from './LoginReducers';
import {combineReducers }from 'redux'
console.log(LoginReducer)
const rootReducers = combineReducers({

    LoginReducer: LoginReducer,
})

export default rootReducers