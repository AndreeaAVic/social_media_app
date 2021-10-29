import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const LandingPage = props => {
    return (
        <div className="landing-page">
            <Navbar />
            <Link to="/login">
                <button type="button" className="btn landing-btn">Log in</button>
            </Link>
            <Link to="/register">
                <button type="button" className="btn landing-btn">Register</button>
            </Link>
        </div>
    )
};

LandingPage.propTypes = {};

export default LandingPage;
