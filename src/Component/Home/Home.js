import React, { } from 'react'
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux'

import './Home.css';
import { logoutUser } from '../../redux/Action/authActions';
import Loading from '../Loader/Loading';
import { Redirect } from 'react-router-dom';

const Home = (props) => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const isLogin = useSelector(state => state.auth.isLogin);
    const user = useSelector(state => state.auth.user);

    const logoutHandler = () => {
        dispatch(logoutUser())
    }

    if (loading) {
        return <Loading />
    }

    if (!isLogin) {
        return <Redirect to="/" />
    }

    return (
        <div className="home">
            <Navbar logout={logoutHandler} />
            <div>
                {user}
            </div>
        </div>
    )
}

export default Home;
