import { LOGIN } from '../constants/LoginConstants';

export const initialState = {
    
};

const LoginReducer = (state = initialState, action) => {
    // console.log("actions",action.payload)
    switch (action.type) {

        case LOGIN:

            return {
               
                ...action.payload, // this is what we expect to get back from API call and login page input
            };

       
        default:
            return state;
    }
}
export default LoginReducer