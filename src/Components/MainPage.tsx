import React from 'react';
import CustomDiv from '../CustomComponents/CustomDiv';
import { userStore } from '../Stores/UserStore';
import CustomText from '../CustomComponents/CustomText';
import CustomDrawer from '../CustomComponents/CustomDrawer';
import { observer } from "mobx-react-lite";
import CustomButton from '../CustomComponents/CustomButton';
import { uiStore } from '../Stores/UIStore';
import UserProfile from '../Profiles/UserProfile';
import PeerProfile from '../Profiles/PeerProfile';
import TabNavigation from './TabNavigation';
import Colors from '../Colors/Colors';

const MainPage : React.FC  = observer(() => {
  
  

  return (
    

    <CustomDiv 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh" 
      width="100%" 
      padding="2rem"
      style={{ backgroundColor: "lightblue" }} 
    >
      
      <CustomButton
      hoverStyle={{ backgroundColor: Colors.CustomBlackyBlue
        ,color: "white" }}
       style={{marginBottom: "50%" , fontSize:"20pt" , marginBlockEnd: "83%"}}  
       color="black"
       onClick={uiStore.toggleDrawer}>|||</CustomButton>
      <CustomDrawer isOpen={uiStore.isDrawerOpen} onClose={uiStore.toggleDrawer} />

      <CustomDiv 
        display="flex"
        alignItems="flex-start"
        height="90%"
        justifyContent="center"
        padding="1rem" 
        width="100%"
        style={{ 
          fontSize: "25pt",
          color: "black",
          marginBottom: "50%"
        }} 
      ><TabNavigation />
        <br />Dashboard
      </CustomDiv>      
    </CustomDiv>
  );
});

export default MainPage;
