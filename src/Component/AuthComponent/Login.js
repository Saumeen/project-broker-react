import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Login.css';


class Login extends Component {

    state = {
        username: "",
        password: "",
    }

    inputChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        e.preventDefault();
        const cred = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.onLogin(cred).then(val => { this.setState({ isValid: val }) });
    }
    render() {

        if (this.state.isValid) {
            return <Redirect to="/home" />;
        }

        return (
            <form onSubmit={this.submitHandler}>
                <div className="form">

                    <div className="form-container">
                        <h1>Login Form</h1>
                        <div className="form-input">
                            <input type="text" name="username" placeholder="Username" className="input" onChange={(e) => this.inputChangeHandler(e)} />
                        </div>


                        <div className="form-password">
                            <input type="password" name="password" placeholder="Password" className="password" onChange={(e) => this.inputChangeHandler(e)} />
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
}

export default Login;