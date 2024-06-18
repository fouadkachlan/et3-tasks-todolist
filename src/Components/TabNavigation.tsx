import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

const TabNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <Tabs value={location.pathname} aria-label="profile tabs">
      <Tab label="Dashboard" value="/dashboard" component={Link} to="/dashboard" />
      <Tab label="User Profile" value="/user-profile" component={Link} to="/user-profile" />
      <Tab label="Peer Profile" value="/peer-profile" component={Link} to="/peer-profile" />  
    </Tabs>
  );
};

export default TabNavigation;
