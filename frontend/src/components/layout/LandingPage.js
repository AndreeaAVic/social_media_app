import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Link to="/login">
                <button type="button" className="btn landing-btn">Log in</button>
            </Link>
            <Link to="/register">
                <button type="button" className="btn landing-btn">Register</button>
            </Link>
        </div>
    )
};

export default LandingPage;
