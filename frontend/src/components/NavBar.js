import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import MainApp from "./MainApp";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import {connect} from 'react-redux'
import {logout} from '../actions/auth'


const NavBar = (props) => {
    const isAuthenticate = props;
    console.log("Navbar----authenticate", isAuthenticate)
    const authLinks = (
        <>
            <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
                <button onClick={props.logout} className="nav-link btn btn-info btn-sm text-light">Logout</button>
            </li>
        </>
    );
    const guestLinks = (
        <>

            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    login
                </Link>
            </li>
        </>
    );
    return (
        <BrowserRouter>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {isAuthenticate.auth ? authLinks : guestLinks}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={MainApp}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
        </BrowserRouter>
    )
}
const mapStateToProps = (state) => ({
    auth: state.auth.isAuthenticate,
});
export default connect(mapStateToProps, {logout})(NavBar)