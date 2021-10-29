import React from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = props => {
    return (
        <div className="container">
            <div className="form text-color lead">
                <h2 className="text-primary large">Log in</h2>
                <FaUserAlt />
                <h4>Log into your account</h4>
            </div>
            <form className="form form-group">
                <input className="form-text" type="email" placeholder="Email Address" />
                <input className="form-text" type="password" placeholder="Password" />
                <input className="btn form-text" type="button" value="Log in" />
            </form>
            <div className="form text-color">
                <h5>Don't have an account?</h5>
                <Link to="/register">
                    Register
                </Link>
            </div>
        </div>
    )
};

LoginForm.propTypes = {};

export default LoginForm;
