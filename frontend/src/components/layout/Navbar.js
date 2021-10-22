import React from 'react';
import PropTypes from 'prop-types';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1 className="logo">react2social</h1>
                <ul>
                    <li> 
                        <AiFillHome /> Home
                    </li>
                    <li> 
                        <FaUser /> Account
                    </li>
                    <li> 
                        <RiLoginCircleFill /> Log in
                    </li>
                    <li> 
                        <ImEnter /> Register
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Navbar.propTypes = {};

export default Navbar;
