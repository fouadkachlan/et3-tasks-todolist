import React from 'react'
import CustomDiv from '../CustomComponents/CustomDiv'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../CustomComponents/CustomButton'
const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <CustomDiv style={{}} width='30%'  height='30%'  display="flex"  alignItems="center"  justifyContent="center">
        Page 2
        <CustomButton style={{marginTop:"300px" , marginRight:"50%"}} onClick={() => navigate('/dashboard')}  color="blue"
         >Return To Dashboard</CustomButton>
    </CustomDiv>
  )
}

export default AboutMe
