import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Form = props => {
    return (
        <div className="container">
            <div className="form text-color lead">
                <h2 className="text-primary large">Register</h2>
                <FaUserAlt />
                <h4>Create your account</h4>
            </div>
            <form className="form form-group">
                <input className="form-text" type="text" placeholder="Name" />
                <input className="form-text" type="email" placeholder="Email Address" />
                <input className="form-text" type="password" placeholder="Password" />
                <input className="form-text" type="password" placeholder="Confirm password" />
                <input className="btn form-text" type="button" value="Register" />
            </form>
            <div className="form text-color">
                <h5>Don't have an account?</h5>
                <Link to="/login">
                    Log in
                </Link>
            </div>
        </div>
    )
};

Form.propTypes = {};

export default Form;
