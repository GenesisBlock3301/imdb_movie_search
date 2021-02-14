import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR, LOGOUT_SUCCESS
} from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticate: null,
    isLoading: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            console.log("User loading")
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticate: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log("Register and login Success Reducer", action.payload);
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticate: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT_SUCCESS:
        case REGISTER_FAILED:
            console.log("All logout")
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                isLoading: false,
                user: null
            };
        default:
            return state
    }
}