import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import RegisterForm from './RegisterForm';

const RegisterPage = props => {
    return (
        <div>
            <Navbar />
            <RegisterForm />
        </div>
    )
};

RegisterPage.propTypes = {};

export default RegisterPage;
