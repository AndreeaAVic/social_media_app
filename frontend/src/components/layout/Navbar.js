import React from 'react';
import { Link } from "react-router-dom";
// import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <h1 className="logo">
                    <Link to='/'>SociaL in </Link>
                </h1>
                <ul>
                    {/* <li> 
                        <AiFillHome /> Home
                    </li> */}
                    <li> 
                        <Link to='/posts'>
                            <FaUser /> Posts
                        </Link>
                    </li>
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

export default Navbar;
