import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';

import './Login.css';

class Signup extends Component {


    state = {
        username: "",
        email: "",
        password: ""
    }

    inputChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitHandler = (e) => {
        e.preventDefault();
        const cred = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        this.props.onSignup(cred).then(val => {

            this.setState({ isSignup: val })
        });
        console.log(this.state.isSignup)
    }

    render() {

        if (this.state.isSignup) {
            return <Redirect to="/" />
        }

        return (
            <form onSubmit={this.submitHandler}>
                <div className="form">

                    <div className="form-container">
                        <h1>Signup Form</h1>

                        <div className="form-input">
                            <input type="email" name="email" placeholder="Email" className="input" onChange={(e) => this.inputChangeHandler(e)} />
                        </div>

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
                            <Link to="/">  <h3>Account Exits? Login</h3> </Link>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

export default Signup;