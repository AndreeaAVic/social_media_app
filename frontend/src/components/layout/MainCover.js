import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import BackgroundPattern from './BackgroundPattern';
import ButtonPattern from './ButtonPattern';
import "./MainCover.css";

const MainCover = props => {
    return (
        <div className="main-cover">
            <Navbar />
            <BackgroundPattern />
            <Link to="/login">
                <ButtonPattern name="Log in" />
            </Link>
            <br />
            <Link to="/register">
                <ButtonPattern name="Register" />
            </Link>
        </div>
    )
};

MainCover.propTypes = {};

export default MainCover;
