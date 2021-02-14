import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../reducers/index'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
//
const initialState = {}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
console.log("Store data",store);
export default store