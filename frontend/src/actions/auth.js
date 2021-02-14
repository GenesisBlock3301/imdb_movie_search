import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR, LOGOUT_SUCCESS,
} from './types'
import axios from "axios";
import {returnError} from './messages'

//Check token and Load User
export const LoadUser = () => (dispatch, getState) => {
    // console.log("User Loading")
    dispatch({type: USER_LOADING})
    axios.get('http://127.0.0.1:8000/api/auth/user/', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
};

// Register User
export const register = (data) => (dispatch) => {
    console.log("Register data action", data, typeof dispatch);
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
//    Request body
    const {email, password} = data;
    const body = JSON.stringify({email, password});
    console.log("Body value", body);
    axios
        .post('http://127.0.0.1:8000/api/auth/register/', body, config)
        .then((resp) => {
            console.warn("Register Response", resp.data);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: resp.data,
            });
            console.log("Register dispatch")
        })
        .catch((err) => {
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAILED
            });
        })

};

// Login User
export const login = (data) => (dispatch) => {
    console.warn("LOGIN Action data", data);

    //Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
    };
//    Request body
    const {email, password} = data;
    const body = JSON.stringify({email, password});
    // console.warn("Login",body)
    axios
        .post('http://127.0.0.1:8000/api/auth/login/', body, config)
        .then((res) => {
            // console.warn("Login Response",res.data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            // console.log("Error")
            dispatch(returnError(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAILED
            });
        });

    return {
        type: LOGIN_SUCCESS,
        data: data
    }
};

//User logout
export const logout = () => (dispatch, getState) => {
    console.log("Logout Working")
    axios.post('http://127.0.0.1:8000/api/auth/logout/', null, tokenConfig(getState))
        .then((res) => {
            // dispatch({type: 'CLEAR_LEADS'});
            console.log("Logout action success", res.data)
            dispatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch((err) => {
            dispatch(returnError(err.response.data, err.response.status));
        })
};

// #token config
export const tokenConfig = (getState) => {
    //  get token from state
    const token = getState().auth.token;
//  headers config
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
//    if token, add to header config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    console.log("Token configurations", config)
    return config
};