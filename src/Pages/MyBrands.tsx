import CustomDiv from '../CustomComponents/CustomDiv'
import CustomButton from '../CustomComponents/CustomButton'
import { useNavigate } from 'react-router-dom'


const MyBrands = () => {
  const navigate = useNavigate();
  return (
    <CustomDiv style={{marginTop:"300px" , marginRight:"50%"}} width='30%'  height='30%'  display="flex"  alignItems="center"  justifyContent="center">
        Page 4
        <CustomButton style={{marginTop:"300px" , marginRight:"50%"}} onClick={() => navigate('/dashboard')}  color="blue"
         >Return To Dashboard</CustomButton>
    </CustomDiv>
  )
}

export default MyBrands;