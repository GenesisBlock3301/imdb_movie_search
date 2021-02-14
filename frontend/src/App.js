import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import {useEffect} from "react";
import {LoadUser} from "./actions/auth";
import store from './store/store'

function App() {
    useEffect(() => {
        store.dispatch(LoadUser())
    }, []);
    return (
        <div className="container-fluid">
            <NavBar/>
        </div>
    )
}

export default App;
