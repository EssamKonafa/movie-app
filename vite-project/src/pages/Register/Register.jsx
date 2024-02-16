import React, { useState } from "react";

export default function Register() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        nameError: '',
        usernameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUser({ ...user, [name]: value });

        switch (name) {
            case 'name':
                setErrors({ ...errors, nameError: (value.length === 0) ? "Name is required" : (value.length < 3) ? "Name must be at least 3 characters" : "" });
                break;
            case 'username':
                const userNameRegex = /^\S+$/
                setErrors({ ...errors, usernameError: (value.length === 0) ? "Username is required" : (userNameRegex.test(value) ? "" : "Username cannot contain spaces") });
                break;
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                setErrors({ ...errors, emailError: (value.length === 0) ? "Email is required" : emailRegex.test(value) ? "" : "Invalid Email" });
                break;
            case 'password':
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                setErrors({ ...errors, passwordError: (value.length === 0) ? "Password is required" : passwordRegex.test(value) ? "" : "Password must contain at least one lowercase, one uppercase, one digit, and one special character and not less than 8 char" });
                break;
            case 'confirmPassword':
                setErrors({ ...errors, confirmPasswordError: (value !== user.password) ? "Passwords do not match" : "" });
                break;
            default:
                break;
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-white p-3 rounded">
                <div className="col-3 mx-auto mb-3">
                    <label htmlFor="nameInputEmail1" className="form-label text-dark">Name</label>
                    <input
                        type="text"
                        className={`form-control ${(errors.nameError) ? 'is-invalid' : 'text-dark'}`}
                        id="nameInputEmail1"
                        name="name"
                        placeholder="Enter your name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.nameError}</div>
                </div>
                <div className="col-3 mx-auto mb-3">
                    <label htmlFor="UserNameInputEmail1" className="form-label text-dark">Username</label>
                    <input
                        type="text"
                        className={`form-control ${(errors.usernameError) ? 'is-invalid' : 'text-dark'}`}
                        id="UserNameInputEmail1"
                        name="username"
                        placeholder="Enter your username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.usernameError}</div>
                </div>
                <div className="col-3 mx-auto mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.emailError}</div>
                </div>
                <div className="col-3 mx-auto mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                    <input
                        type="password"
                        className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Enter your password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.passwordError}</div>
                </div>
                <div className="col-3 mx-auto mb-3">
                    <label htmlFor="exampleInputConfirmPassword1" className="form-label text-dark">Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control ${(errors.confirmPasswordError) ? 'is-invalid' : 'text-dark'}`}
                        id="exampleInputConfirmPassword1"
                        name="confirmPassword"
                        placeholder="Re-enter your password"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.confirmPasswordError}</div>
                </div>
                <div className="col-3 mx-auto mb-3">
                    <button type="submit" className="btn btn-success">Sign Up</button>
                </div>
            </form>
        </>
    )
}