import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../auth';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

export default function Login() {
  const { register, handleSubmit } = useForm({ defaultValues: { email: 'admin@gmail.com', password: 'asdf@123' } });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const onSubmit = async (data) => {
    setError(null);
    try {
      await login(data.email, data.password);
      navigate('/services');
    } catch (err) {
      setError(err?.response?.data?.error || 'Login failed');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 2 }}>
      <Paper sx={{ p: 3, width: 360 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Admin Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField label="Email" fullWidth sx={{ mb: 2 }} {...register('email', { required: true })} />
          <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} {...register('password', { required: true })} />
          {error && <Typography color="error" sx={{ mb: 1 }}>{error}</Typography>}
          <Button fullWidth variant="contained" type="submit">Login</Button>
        </form>
      </Paper>
    </Box>
  );
}
