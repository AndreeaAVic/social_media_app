import axios from 'axios';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
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
        } else {
            const user = {
                name,
                email,
                password,
            };
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const body = JSON.stringify(user);

                const response = await axios.post('/api/users', body, config);
                console.log(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        }
    };

    return (
        <div className="container">
            <div className="form text-color lead">
                <h2 className="text-primary large">Register</h2>
                <FaUserAlt />
                <h4>Create your account</h4>
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

export default RegisterPage;
