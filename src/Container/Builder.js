import React, { Component } from 'react'
import Login from '../Component/AuthComponent/Login';
import Signup from '../Component/AuthComponent/Signup';

import Home from '../Component/Home/Home';

import { Route, Switch } from 'react-router-dom';
import Axios from 'axios';

export default class Builder extends Component {

    state = {
        isLogin: false,
        isSignup: false,
        login: {
            username: "",
            password: ""
        },
        signup: {
            username: "",
            password: "",
            email: ""
        }

    }

    loginHandler = async (cred) => {

        await Axios.post("https://project-broker.herokuapp.com/api/auth/login", cred)
            .then((response) => {
                const res = response.data.data.response;
                if (res.exits) {
                    this.setState({ isLogin: true, login: cred });

                }
                else {
                    this.setState({ isLogin: false, login: { username: "", password: "" } });
                }
                console.log(res);

            })
            .catch((error) => {
                console.log(error);
            });
        return this.state.isLogin;

    }

    signupHandler = async (cred) => {

        await Axios.post("https://project-broker.herokuapp.com/api/auth/addUser", cred)
            .then((response) => {
                const res = response.data.success;
                console.log(response.data.data.response)
                this.setState({ isSignup: res })
            })
            .catch((error) => {
                console.log(error);
            });
        console.log("[Builder]" + this.state.isSignup)

        return this.state.isSignup;


    }

    render() {

        return (
            <Switch>
                <Route path="/" exact> <Login onLogin={this.loginHandler} /> </Route>
                <Route path="/signup" exact> <Signup onSignup={this.signupHandler} /> </Route>
                <Route path="/home" exact> <Home user={this.state.login.username} /></Route>
            </Switch>
        )
    }
}

