import React from 'react';
import PropTypes from 'prop-types';
import appCover from './appCover.jpg';

const BackgroundPattern = props => {
    return (
        <div className="background-pattern">
           <img src={appCover} alt="book" /> 
        </div>
    )
};

BackgroundPattern.propTypes = {};

export default BackgroundPattern;
