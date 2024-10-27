import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful login, redirect to welcome page
        navigate('/welcome');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Email or password does not match'); // Set the error message
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2 className="text-center mb-4">Login to Your Account</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Conditionally render the error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <p className="text-center mt-3">
          <a href="/register">Don't have an account? Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
