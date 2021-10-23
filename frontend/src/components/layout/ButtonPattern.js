import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPattern.css';

const ButtonPattern = props => {
    return (
        <div className="button-pattern">
            <button type="button" className="btn-primary cover-btn">{props.name}</button>
        </div>
    )
};

ButtonPattern.propTypes = {};

export default ButtonPattern;
