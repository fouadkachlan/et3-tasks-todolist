import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import UserProfile from './Profiles/UserProfile';
import PeerProfile from './Profiles/PeerProfile';
import TabNavigation from './TabNavigation';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';


const App: React.FC = () => {
  return (
    <Router>
      <Container style={{marginTop: "20px"}}>
        <TabNavigation />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<MainPage/>} />
          <Route path="/page1" element ={<Page1/>} />
          <Route path="/page2" element ={<Page2/>} />
          <Route path="/page3" element ={<Page3/>} />
          <Route path="/page4" element ={<Page4/>} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/peer-profile" element={<PeerProfile />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
