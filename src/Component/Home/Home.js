import React, { Component } from 'react'
import Navbar from '../Navbar';

import './Home.css';
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <div>
                    {this.props.user}
                </div>
            </div>
        )
    }
}
