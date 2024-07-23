import React, { useState } from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
    const [isSignUp, setIsSignUp] = useState(true);

    const [signUpFormData, setSignUpFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const handleSignUpChange = (event) => {
        const { name, value } = event.target;
        setSignUpFormData((prevFormData) => ({
            ...prevFormData, [name]: value,
        }));
    };

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginFormData((prevFormData) => ({
            ...prevFormData, [name]: value,
        }));
    };

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        // Perform sign-up form validation and backend submission
        // ...
        setSignUpFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Perform login form validation and backend submission
        // ...
        setLoginFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className="signup-background" style={{ backgroundImage: "url('/images/8270301.jpg')" }}>
            <div className="registration-form">
                <div className='buttons_h2_sonainer' style={{ backgroundImage: "url('/images/8270301.jpg')" }}>
                    <div className="buttons-container" >
                        <button

                            className={isSignUp ? 'active' : ''}
                            onClick={() => setIsSignUp(true)}
                        >
                            Sign Up
                        </button>
                        <button

                            className={!isSignUp ? 'active' : ''}
                            onClick={() => setIsSignUp(false)}
                        >
                            Log In
                        </button>

                    </div>
                    <div className="heading-container">
                        <h2>HELLO!</h2>
                        <hr />
                    </div>
                </div>
                {isSignUp ? (
                    <form className="login-form" onSubmit={handleSignUpSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={signUpFormData.name}
                            onChange={handleSignUpChange}
                            placeholder="Name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={signUpFormData.email}
                            onChange={handleSignUpChange}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={signUpFormData.password}
                            onChange={handleSignUpChange}
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={signUpFormData.confirmPassword}
                            onChange={handleSignUpChange}
                            placeholder="Confirm Password"
                        />
                        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
                    </form>
                ) : (
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={loginFormData.email}
                            onChange={handleLoginChange}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={loginFormData.password}
                            onChange={handleLoginChange}
                            placeholder="Password"
                        />
                        <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
                    </form>
                )}
            </div>
        </div>
    );
}
