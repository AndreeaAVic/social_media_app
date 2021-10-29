import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import LoginForm from './LoginForm';

const LoginPage = props => {
    return (
        <div>
           <Navbar /> 
           <LoginForm />
        </div>
    )
};

LoginPage.propTypes = {};

export default LoginPage;
