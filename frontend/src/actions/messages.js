import {CREATE_MESSAGE,GET_ERROR} from './types'


//create message
export const createMessgae=(msg,dispatch)=>{
    dispatch({
        type:CREATE_MESSAGE,
        payload: msg
    })
};

//return errors
export const returnError=(msg,status)=>{
    console.warn("Error message",msg,status)
    return{
        type:GET_ERROR,
        payload: {msg,status}
    }
};