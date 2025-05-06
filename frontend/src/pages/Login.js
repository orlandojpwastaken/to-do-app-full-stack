import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { login } from '../services/authService';
import '../stylesheets/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in both fields');
      setLoading(false);
      return;
    }

    try {
      const userData = await login(email, password);
      console.log('User logged in successfully:', userData);
      // Force page reload to update auth state
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.response?.data?.details || 
        error.response?.data?.error || 
        'Login failed. Please check your credentials and try again.'
      );
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <Paper elevation={3} className="auth-paper">
        <Typography variant="h5" className="auth-header">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
                disabled={loading}
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
                className="auth-textfield"
                disabled={loading}
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
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Grid>
          </Grid>
        </form>

        <a href="/signup" className="auth-link">Don't have an account? Sign Up</a>
      </Paper>
    </div>
  );
};

export default Login;
