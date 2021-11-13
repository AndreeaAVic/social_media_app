import axios from 'axios';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Alert from '../layout/Alert';

const RegisterPage = (props) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmationPassword: '',
    });

    const { name, email, password, confirmationPassword } = formData;
    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmationPassword) {
            console.log('Passwords do not match');
            props.setAlert('Passwords do not match', 'error', 3000);
        } else {
            const user = {
                name,
                email,
                password,
            };
            props.register(user);
        }
    };

    console.log('isAuthenticated: ', props.isAuthenticated);

    return props.isAuthenticated ? (
        <Redirect to='/posts' />
    ) : (
        <div className="container">
            <div className="form text-color lead">
                <h2 className="text-primary large">Register</h2>
                <FaUserAlt />
                <h4>Create your account</h4>
                <Alert />
            </div>
            <form className="form" onSubmit={(e) => submitHandler(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => 
                            setFormData({ ...formData, name: e.target.value})
                        }
                        required
                    />
                </div>
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
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => 
                            setFormData({ ...formData, password: e.target.value })
                        }
                        minLength="6"
                        autoComplete="on"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        name="confirmationPassword"
                        value={confirmationPassword}
                        onChange={(e) => 
                            setFormData({ ...formData, confirmationPassword: e.target.value })
                        }
                        minLength="6"
                        autoComplete="on"
                    />
                </div>
                <input type="submit" className="btn form-text" value="Register" />
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

RegisterPage.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(RegisterPage);
