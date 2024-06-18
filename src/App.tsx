import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './Profiles/UserProfile';
import PeerProfile from './Profiles/PeerProfile';
import LoginPage from './Components/LoginPage';
import MainPage from './Components/MainPage';
import AboutMe from './Pages/AboutMe';
import Experience from './Pages/Experience';
import MyBrands from './Pages/MyBrands';
import ContactMe from './Pages/ContactMe';


const App: React.FC = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<MainPage/>} />
          <Route path="/aboutme" element ={<AboutMe/>} />
          <Route path="/experience" element ={<Experience/>} />
          <Route path="/mybrands" element ={<MyBrands/>} />
          <Route path="/contact" element ={<ContactMe/>} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/peer-profile" element={<PeerProfile />} />
        </Routes>
  
    </Router>
  );
};

export default App;
