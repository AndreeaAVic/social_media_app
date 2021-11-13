import axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const LoginPage = (props) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmationPassword: '',
    });

    const { email, password } = formData;
    const submitHandler = async (e) => {
        e.preventDefault();
        
        props.login({ email, password });
    }

    return props.isAuthenticated ? (
        <Redirect to='/posts' />
        ) : (
        <div className="container">
            <div className="form text-color lead">
                <h2 className="text-primary large">Log in</h2>
                <FaUserAlt />
                <h4>Log into your account</h4>
            </div>
            <form className="form" onSubmit={(e) => submitHandler(e)}>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={(e) => 
                            setFormData({ ...formData, email: e.target.value })
                        } 
                        required
                        autoComplete="on"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        value={password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value }) 
                        }
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn form-text" value="Log in" />
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

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginPage);
