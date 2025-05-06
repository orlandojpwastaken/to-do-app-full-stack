import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/auth.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      const name = lastName ? `${firstName} ${lastName}` : firstName;
      const userData = await register(name, email, password);
      console.log('User registered:', userData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
      setError(
        error.response?.data?.details || 
        error.response?.data?.error || 
        'Registration failed. Please try again.'
      );
    }
  };

  return (
    <div className="auth-container">
      <Paper elevation={3} className="auth-paper">
        <Typography variant="h5" className="auth-header">Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="auth-textfield"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name (Optional)"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="auth-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="auth-textfield"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                helperText="Password must be 8-20 characters with at least one uppercase letter, one lowercase letter, one number, and one special character"
                className="auth-textfield"
              />
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Typography className="auth-error">{error}</Typography>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="auth-button"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>

        <a href="/login" className="auth-link">Already have an account? Login</a>
      </Paper>
    </div>
  );
};

export default SignUp;