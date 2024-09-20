import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title="Login - Ecommerce App">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong> <span className="required">*</span></label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password </strong><span className="required">*</span></label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#0ec8e5' }}>
                        LOGIN
                    </button>
                    <p
                        style={{
                            color: '#007bff',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            textDecoration: 'underline',
                            display: 'inline',
                            margin: '0',
                            padding: '0',
                        }}
                        onClick={() => navigate('/forgot-password')}
                    >
                        Forgot Password?
                    </p>

                    <div className="links">
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                        <p>By logging in, you agree to our  <Link to="/policy">Privacy Policy</Link>.</p>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
