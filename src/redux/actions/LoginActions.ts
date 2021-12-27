import { LOGIN, NOT_LOGIN } from '../constants/LoginConstants';
import LoginAPI from '../../api/LoginAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
export const LoginMembers = (data) => {
    return async function (dispatch, getState) {
        // console.warn("info",data)
        // const response = await LoginAPI.get(`/LoginAPIJSON?token=${data.token}&username=${data.name}&password=${data.password}`);
       
            dispatch({
                type: LOGIN,
                payload:data
            })

        

    }
};