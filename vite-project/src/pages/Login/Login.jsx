import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setUser({ ...user, [name]: value });

        switch (name) {
            case 'email':
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                setErrors({ ...errors, emailError: (value.length === 0) ? "Email is required" : emailRegex.test(value) ? "" : "Invalid Email" });
                break;
            case 'password':
                const passwordError = (value.length === 0) ? "Password is required" : (value.length < 8) ? "Password must be at least 8 characters long" : "";
                setErrors({ ...errors, passwordError });
                break;
            default:
                break;
        }
    }

    const loginSubmit = () => {
        navigate('/faviorit');
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (errors.emailError === '' && errors.passwordError === '') {
            loginSubmit();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="col-3 mx-auto">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className={`form-control ${(errors.emailError) ? 'border-danger' : ''}`}
                        id="exampleInputEmail1"
                        name="email"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <p className="text-danger">{errors.emailError}</p>
                </div>
                <div className="col-3 mx-auto">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${(errors.passwordError) ? 'border-danger' : ''}`}
                            id="exampleInputPassword1"
                            name="password"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={handleChange}
                        />
                        <button type="button" className="btn btn-success text-white" onClick={togglePasswordVisibility}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <p className="text-danger">{errors.passwordError}</p>
                </div>
                <div className="col-3 mx-auto">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </>
    )
}