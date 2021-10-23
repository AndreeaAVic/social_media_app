import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import BackgroundPattern from './BackgroundPattern';
import ButtonPattern from './ButtonPattern';
import "./MainCover.css";

const MainCover = props => {
    return (
        <div>
            <Navbar />
            <BackgroundPattern />
            <ButtonPattern name="Log in" />
            <br />
            <ButtonPattern name="Register" />
        </div>
    )
};

MainCover.propTypes = {};

export default MainCover;
