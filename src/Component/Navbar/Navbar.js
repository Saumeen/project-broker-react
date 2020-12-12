import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {



    return (
        <nav>
            <div className="navbar-wrapper">
                <div className="navbar">

                    <Link to="/home"><li>Broker</li></Link>
                    <Link to="/"><li onClick={props.logout}>Logout</li></Link>


                </div>


            </div>
        </nav>
    );


}


export default Navbar;