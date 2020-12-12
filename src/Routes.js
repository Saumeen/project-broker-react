import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Login from './Component/AuthComponent/Login';
import Signup from './Component/AuthComponent/Signup';
import Home from './Component/Home/Home';


const Routes = () => {



    return (
        <Switch>
            <Route path="/" exact> <Login /> </Route>
            <Route path="/signup" exact> <Signup /> </Route>
            <Route path="/home" exact> <Home /></Route>


        </Switch>
    )

}

export default Routes;

