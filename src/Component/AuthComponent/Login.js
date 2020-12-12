import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import './Login.css';
import { loginUser } from '../../redux/Action/authActions';

import Loader from '../Loader/Loading';
const Login = () => {

    const isLogin = useSelector(state => state.auth.isLogin);
    const loading = useSelector(state => state.auth.loading);
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const dispatch = useDispatch();



    if (loading) {
        return <Loader />
    }




    const inputChangeHandler = (e) => {
        console.log(isLogin);
        setUser(e.target.value)
        console.log(user);
    }
    const passwordHalder = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        console.log(isLogin);
        e.preventDefault();
        const cred = {
            username: user,
            password: password
        }

        dispatch(loginUser(cred))
        console.log("Done")
    }



    if (isLogin) {

        return <Redirect to="/home" />;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form">

                <div className="form-container">
                    <h1>Login Form</h1>
                    <div className="form-input">
                        <input type="text" name="username" placeholder="Username" className="input" onChange={(e) => inputChangeHandler(e)} />
                    </div>


                    <div className="form-password">
                        <input type="password" name="password" placeholder="Password" className="password" onChange={(e) => passwordHalder(e)} />
                    </div>

                    <div className="form-submit">
                        <button className="submit-button">Submit</button>
                    </div>

                    <div className="new-account">
                        <Link to="/signup">  <h3>New account? signup</h3> </Link>
                    </div>
                </div>

            </div>
        </form>
    )

}

export default Login;