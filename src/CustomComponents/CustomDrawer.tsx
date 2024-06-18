import React from 'react';
import CustomDiv from './CustomDiv';
import CustomButton from './CustomButton';
import { observer } from "mobx-react-lite";
import { uiStore } from '../Stores/UIStore';
import CustomText from './CustomText';
import { useNavigate } from 'react-router-dom';

interface CustomDrawerProps
{
  isOpen : boolean;
  onClose: () => void;
}
  
const CustomDrawer: React.FC<CustomDrawerProps> = observer(({isOpen , onClose}) => {
  const navigate = useNavigate();
  console.log("Drawer is Open" ,isOpen);
  const handleLanguageChange = (language: string) => {
    uiStore.setLanguage(language);
    onClose();
  };
const navigateToPage= (page: string) => {
  navigate(`/${page}`);
  onClose();
}
const getLastVisitedPage = () => {
  return localStorage.getItem('lastvisistedPage' || 'dashboard')
}
  
  return (

    <CustomDiv
      width={isOpen ? "430px" : "0"}
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      style={{
        color: "red",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "white",
        overflowX: "hidden",
        transition: "1s",
        paddingTop: isOpen ? "60px" : "0"
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} 
    >
      <CustomButton color="red" onClick={onClose} style={{ fontSize: "20px", marginLeft: "10px" }}>
        Close &times;
      </CustomButton>
      <CustomButton color="red" onClick={() => handleLanguageChange('English')} style={{ fontSize: "20px", marginLeft: "10px" }}>
        English
      </CustomButton>
      <CustomButton color="red" onClick={() => handleLanguageChange('Arabic')} style={{ fontSize: "20px", marginLeft: "10px" }} >
        Arabic
      </CustomButton>
      <CustomText fontSize="12pt" fontWeight="bold" style={{}}>
        Selected Language: {uiStore.selectedLanguage}
      </CustomText>
      <CustomDiv style={{flexDirection:"column"}} width=""  height=""  display="flex"  alignItems="center"  justifyContent="center">
        <CustomText style={{cursor:"pointer"}} fontSize="20pt" fontWeight="" onClick={() => navigateToPage("contact")}>
          Page1
        </CustomText>
        <CustomText style={{cursor:"pointer"}}  fontSize="20pt" fontWeight="" onClick={() => navigateToPage("aboutme")}>
          Page2
        </CustomText>
        <CustomText style={{cursor:"pointer"}}  fontSize="20pt" fontWeight="" onClick={() => navigateToPage("experience")} >
          Page3
        </CustomText>
        <CustomText style={{cursor:"pointer"}}  fontSize="20pt" fontWeight="" onClick={() => navigateToPage("mybrands")} >
          Page4
        </CustomText>
      </CustomDiv>
      
    </CustomDiv>
  );
});

export default CustomDrawer;
