import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Login.css';
import { signupUser } from '../../redux/Action/authActions';
import Loading from '../Loader/Loading';


const Signup = () => {

    const loading = useSelector(state => state.auth.loading);
    const isSignup = useSelector(state => state.auth.isSignup);
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        const cred = {
            username: username,
            password: password,
            email: email
        }

        dispatch(signupUser(cred))
    }



    if (loading) {
        return <Loading />
    }
    if (isSignup) {
        return <Redirect to="/" />
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="form">

                <div className="form-container">
                    <h1>Signup Form</h1>

                    <div className="form-input">
                        <input type="email" name="email" placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-input">
                        <input type="text" name="username" placeholder="Username" className="input" onChange={(e) => setusername(e.target.value)} />
                    </div>

                    <div className="form-password">
                        <input type="password" name="password" placeholder="Password" className="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-submit">
                        <button className="submit-button">Submit</button>
                    </div>

                    <div className="new-account">
                        <Link to="/">  <h3>Account Exits? Login</h3> </Link>
                    </div>
                </div>

            </div>
        </form>
    )
}


export default Signup;