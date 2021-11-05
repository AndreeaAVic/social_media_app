import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const LoginPage = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmationPassword: '',
    });

    const { email, password } = formData;
    const submitHandler = async (e) => {
        e.preventDefault();
        const credentials = {
            email,
            password
        };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json', 
                },
            };
            const body = JSON.stringify(credentials);

            const response = await axios.post('/api/auth', body, config);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
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

export default LoginPage;
