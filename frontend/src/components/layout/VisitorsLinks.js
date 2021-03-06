import React from 'react';
import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';
import { RiLoginCircleFill } from 'react-icons/ri';
import { ImEnter } from 'react-icons/im';

const VisitorsLinks = () => {
    return (
        <div>
           <ul>
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
