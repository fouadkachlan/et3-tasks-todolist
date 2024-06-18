import React from 'react';
import CustomDiv from './CustomDiv';
import CustomButton from './CustomButton';
import Colors from '../Colors/Colors';
import { useNavigate } from 'react-router-dom';
import { CustomPopUpProps } from '../interfaces/CustomPropUpProps';



const CustomPopUp : React.FC<CustomPopUpProps> = ({onClose}) => {

    const navigate = useNavigate();
  return (
    <CustomDiv 
      display='flex'
      alignItems='center' 
      justifyContent='center'
      height="200px"
      width="350px" // Increased width for better display
      padding="20px"
      style={{
        margin: "15px 10px 20px 10px",
        backgroundColor: 'white', // Semi-transparent black background
        borderRadius: '20px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Box shadow for depth
      }}
    >
      <CustomDiv 
        display='flex'
        alignItems='center' 
        justifyContent='center'
        height="50px"
        width="50px"
        padding="10px"
        style={{
          backgroundColor: 'red',
          color: "white",
          borderRadius: '500px',
          
        }}
      > ⚠️
      </CustomDiv>

      <CustomDiv 
        display='flex'
        alignItems='center' 
        justifyContent='center'
        height="50px"
        width="100px"
        padding="10px"
        style={{
          margin: "90px",
          flexDirection:"row",
          backgroundColor: 'white', 
          borderRadius: '10px', 
          fontSize:"10pt"
          
        }}
        
      >Password and Username are not correctley typed or  not typed at all
        <CustomButton onClick={() => {
            onClose();
            navigate("/");
        }}
            style={{
                borderRadius: "10px 10px",
                backgroundColor:"red",
                color: "white",
                width: "200px",
                height: "50px",
                marginTop: "100px",
                marginLeft: "50px",
                marginBlockStart:"100px",
                marginInlineEnd: "10px"
            }}
            hoverStyle={{
                backgroundColor: Colors.BlackyBlue,
                color: "white" }}
            color="red"
        >Re-Enter</CustomButton>
      </CustomDiv>
    </CustomDiv>
  );
}

export default CustomPopUp;
