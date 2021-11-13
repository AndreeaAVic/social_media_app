import React from 'react';
import { Link } from "react-router-dom";
import { AiFillHome, AiFillEdit } from 'react-icons/ai';
// import { FaUser } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const VisitorsLinks = () => {
    return (
        <div>
           <ul>
                <li>
                    <Link to='/'> 
                        <AiFillHome /> Home
                    </Link>
                </li>
                <li> 
                    <Link to='/posts'>
                        <AiFillEdit /> Posts
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
        </div>
    )
}

export default VisitorsLinks;
