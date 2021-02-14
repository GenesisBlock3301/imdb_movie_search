import React, {useState} from 'react'
import {register} from '../../actions/auth'
import {connect} from "react-redux";
import {Link,Redirect} from 'react-router-dom'

const Register = (props) => {
    console.log("Register", props.isAuthenticate)
    const [user, setUser] = useState({
        email: '',
        password: '',
        password2: ''
    });
    let error = null;
    const onSubmit = (e)=>{
        // console.log('OnSubmit',user)
        const {email,password, password2} = user;
        if (password !== password2){
            error = "Password not match"
        }
        else {
            const newUser = {
                email,
                password,
            };
            console.log("register")
            props.register(newUser)
        }
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
        let header = ''

    return (
        <div className="col-md-6 m-auto login-form">
            <div className="card card-body mt-5" style={{borderRadius:'2%'}}>
                <h2 className="text-center">Register</h2>
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
                        <label htmlFor="">Confirm Password</label>
                        <input required type="password" className="form-control" name="password2" onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary">
                            Register
                        </button>
                    </div>
                    <p>
                        Already have an account ? <Link to="/login/">Login</Link>
                    </p>
                </form>
            </div>
            {/*<button onClick={()=>this.props.registerHandler({data:"action done"})}>Action</button>*/}
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticate: state.auth.isAuthenticate
    // state.auth.isAuthenticate
});
export default connect(mapStateToProps,{register})(Register);