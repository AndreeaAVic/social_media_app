import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const Navbar = props => {
    let posts = fetch('/api/posts')
        .then((res) => res.json())
        .then((data) => console.log(data));
    
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1 className="logo">SociaL in</h1>
                <ul>
                    {/* <li> 
                        <AiFillHome /> Home
                    </li>
                    <li> 
                        <FaUser /> Account
                    </li> */}
                    <li> 
                        <Link to="/login"> 
                            <RiLoginCircleFill /> Log in 
                        </Link>
                    </li>
                    <li> 
                        <Link to="/register"> 
                            <ImEnter /> Register 
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

Navbar.propTypes = {};

export default Navbar;
