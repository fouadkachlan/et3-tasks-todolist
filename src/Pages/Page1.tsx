import React from 'react'
import CustomDiv from '../CustomComponents/CustomDiv'
import CustomButton from '../CustomComponents/CustomButton'
import { useNavigate } from 'react-router-dom'


const Page1 = () => {

  const navigate = useNavigate();
  return (
    <CustomDiv style={{}} width=""  height=""  display="flex"  alignItems="center"  justifyContent="center">
        Page 1
        <CustomButton style={{marginTop:"300px" , marginRight:"50%"}} onClick={() => navigate('/dashboard')}  color="blue"
         >Return To Dashboard</CustomButton>

        {/* <CustomButton style={{marginTop:"300px" , marginRight:"50%"}} onClick={() => navigate('/dashboard')}  color="blue"
         >Return To Last Page Opened</CustomButton>
          */}

    </CustomDiv>
  )
}

export default Page1