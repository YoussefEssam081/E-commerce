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

    /*
    // i can make only one formdata and one handleChange
    const [formData, setFormData] = useState({
        signUp: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        logIn: {
            email: '',
            password: '',
        },
    });
     */
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    /*
        const handleChange = (event) => { //async this for api if u wanna send fomrdata 
            const { name, value } = event.target;
            const formType = isSignUp ? 'signUp' : 'logIn';
    
            setFormData((prevFormData) => ({
                ...prevFormData,
                [formType]: {
    
                    ...prevFormData[formType], [name]: value,
                }
    
            }));
    
            validateForm(name, value, formType);
            // Send Data to an API (Asynchronous Submission)
            /*  
         if (Object.keys(formErrors).length === 0) {
             // No errors, proceed with form submission
             try {
               const response = await fetch('https://api.example.com/submit', {
                 method: 'POST',
                 headers: {
                   'Content-Type': 'application/json',
                 },
                 body: JSON.stringify(formData),
               });
         
               if (response.ok) {
                 // Handle successful response
                 alert('Form submitted successfully!');
                 // Optionally reset the form
                 setSignUpFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
               } else {
                 // Handle errors from the server
                 const errorData = await response.json();
                 alert(`Submission failed: ${errorData.message}`);
               }
             } catch (error) {
               console.error('Error submitting form:', error);
               alert('An error occurred while submitting the form.');
             }
           }
    
            *
        };
        */

    // Perform sign-up form validation and backend submission
    // ...
/*
    const validateForm = (name, value, formType) => {
        let formErrors = { ...errors };

        if (formType === "signUp") {

            if (name === 'name' && !validateName(value)) {
                formErrors.name = 'Invalid name ';
            } else {
                delete formErrors.name;
            }

            if (isSignUp && name === 'confirmPassword' && !validateConfirmPassword(signUpFormData.password, value)) {
                formErrors.confirmPassword = 'Passwords do not match';
            } else {
                delete formErrors.confirmPassword;
            }
        }

        if (name === 'email' && !validateEmail(value)) {
            formErrors.email = 'Invalid email address';
        } else {
            delete formErrors.email;
        }
        if (name === 'password' && !validatePassword(value)) {
            formErrors.password = 'Password must be at least 6 characters, include an uppercase letter, a number, and a special character';
        } else {
            delete formErrors.password;
        }
        setErrors(formErrors);

        // Update Local State or Context


    }

*/
    const handleSignUpChange = (event) => {
        const { name, value } = event.target;
        setSignUpFormData((prevFormData) => ({
            ...prevFormData, [name]: value.trim(),
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
        setIsSubmitting(true);
    
        // Validate all fields before submission
        const formErrors = {};
        if (!validateName(signUpFormData.name)) {
            formErrors.name = 'Invalid name';
        }
        if (!validateEmail(signUpFormData.email)) {
            formErrors.email = 'Invalid email address';
        }
        if (!validatePassword(signUpFormData.password)) {
            formErrors.password = 'Password must be at least 6 characters, include an uppercase letter, a number, and a special character';
        }
        if (!validateConfirmPassword(signUpFormData.password, signUpFormData.confirmPassword)) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
    
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length === 0) {
            // No errors, proceed with submission
            alert('Sign up successful!');
            setSignUpFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
        setIsSubmitting(false);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
    
        // Validate all fields before submission
        const formErrors = {};
        if (!validateEmail(loginFormData.email)) {
            formErrors.email = 'Invalid email address';
        }
        if (!validatePassword(loginFormData.password)) {
            formErrors.password = 'Password must be at least 6 characters';
        }
    
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length === 0) {
            // No errors, proceed with submission
            alert('Login successful!');
            setLoginFormData({
                email: '',
                password: '',
            });
        }
        setIsSubmitting(false);
    };
    /*
        const handleSubmit = (event) => {
            event.preventDefault();
    
            setIsSubmitting(true);
    
            let isValid = true;
    
            const formType = isSignUp ? 'signUp' : 'logIn';
            // Validate all fields before submission
            Object.keys(formData[formType]).forEach((key) => {
                const value = formData[formType][key];
                if (!validateForm(key, value , formType)) {
                    isValid = false;
                }
            });
    
            if (isValid) {
                // Submit the form
                alert('Form submitted successfully!');
                setFormData({
                    signUp: {
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    },
                    login: {
                        email: '',
                        password: '',
                    },
                });
            }
    
            setIsSubmitting(false);
        }
    
    */



   

    // Ensure the name field doesn't contain numbers or special characters
    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name.trim());
    };


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    //  requiring At least one uppercase letter. / At least one number. /At least one special character. / Minimum length of 6 characters.
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
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
                        <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
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
                            aria-describedby="nameError"
                        />
                        {errors.name && <span id="nameError" role="alert" >{errors.name}</span>}
                        <input
                            type="email"
                            name="email"
                            value={signUpFormData.email}
                            onChange={handleSignUpChange}
                            placeholder="Email"
                            aria-describedby="emailError"
                        />
                        {errors.email && <span id="emailError" role="alert" >{errors.email}</span>}
                        <input
                            type="password"
                            name="password"
                            value={signUpFormData.password}
                            onChange={handleSignUpChange}
                            placeholder="Password"
                            aria-describedby="passwordError"
                        />
                        {errors.password && <span id="passwordError" role="alert" >{errors.password}</span>}
                        <input
                            type="password"
                            name="confirmPassword"
                            value={signUpFormData.confirmPassword}
                            onChange={handleSignUpChange}
                            placeholder="Confirm Password"
                            aria-describedby="confirmPasswordError"
                        />
                        {errors.confirmPassword && <span id="confirmPasswordError" role="alert" >{errors.confirmPassword}</span>}
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
                            aria-describedby="emailError"
                        />
                        {errors.email && <span id="emailError" role="alert" >{errors.email}</span>}
                        <input
                            type="password"
                            name="password"
                            value={loginFormData.password}
                            onChange={handleLoginChange}
                            placeholder="Password"
                            aria-describedby="passwordError"
                        />
                        {errors.password && <span id="passwordError" role="alert" >{errors.password}</span>}
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : isSignUp ? 'Sign Up' : 'Log In'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );

}


