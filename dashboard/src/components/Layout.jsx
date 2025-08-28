import React from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';

export default function Layout({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Dynamically set the current tab based on the pathname
  let currentTab;
  if (location.pathname.startsWith('/services')) {
    currentTab = 0;
  } else if (location.pathname.startsWith('/blogs')) {
    currentTab = 1;
  } else if (location.pathname.startsWith('/update-links')) {
    currentTab = 2;
  }

  const handleTabChange = (_, newTabIndex) => {
    switch (newTabIndex) {
      case 0:
        navigate('/services');
        break;
      case 1:
        navigate('/blogs');
        break;
      case 2:
        navigate('/update-links');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => navigate('/services')}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={() => { logout(); navigate('/login'); }}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ px: 2, pt: 2 }}>
        <Tabs 
          value={currentTab} 
          onChange={handleTabChange} 
          indicatorColor="secondary" 
          textColor="inherit" 
        >
          <Tab label="Services" />
          <Tab label="Blogs" />
          <Tab label="Update YouTube Links" />
        </Tabs>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
}
