import React, {useState} from 'react'
import {login} from '../../actions/auth'
import {connect} from "react-redux";
import {Link,Redirect} from 'react-router-dom';

const Login = (props) => {
    console.log("Register", props.isAuthenticate)
    console.log("Error", props.error.auth.user)
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const onSubmit = (e)=>{
        // console.log('OnSubmit',user)
        const {email,password} = user;
            const newUser = {
                email,
                password,
            };
           console.log("register")
            props.login(newUser)

        e.preventDefault()
    };
     const onChange = (e)=>{
        console.log("Onchange",user)
        setUser({...user,[e.target.name]:e.target.value})
    };
     console.log("UERRRRR",typeof user)
     if(props.isAuthenticate){
            return (<Redirect to="/"/>);
        }
    return (
        <div className="col-md-6 m-auto login-form">
            <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                <form action='' onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input required type="email" className="form-control" name="email" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input required type="password" className="form-control" name="password" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary">
                            Login
                        </button>
                    </div>
                    <p>
                        Don't have any account ? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
            {/*<button onClick={()=>this.props.registerHandler({data:"action done"})}>Action</button>*/}
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticate: state.auth.isAuthenticate,
    error: state
    // state.auth.isAuthenticate
});
export default connect(mapStateToProps,{login})(Login);