import React from 'react'
import CustomDiv from '../CustomComponents/CustomDiv'
import CustomText from '../CustomComponents/CustomText'
import { userStore } from '../Stores/UserStore'

const PeerProfile : React.FC = () => {
    const username = userStore.getpeerUser().name;
    const age = userStore.getpeerUser().age;
    const location = userStore.getpeerUser().location;
    const jobPosition = userStore.getpeerUser().job_position;
  return (
    <CustomDiv
      display="flex"
      flexDirection="column"
      height="10rem"
      alignItems="center"
      justifyContent="center"
      padding="1rem"
      width="100%"
      style={{
        backgroundColor: "lightcoral",
        borderRadius: "0.7rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "0 auto",
        marginTop:"20px",
        maxWidth: "65%",
      }}
    >
      
      <CustomText fontSize="20pt" fontWeight="bold" style={{ color: "white", marginBottom: "1rem" }}>
        Peer Profile
      </CustomText>
      <CustomText fontSize="14pt" fontWeight="bold" style={{ color: "white", textAlign: "center" }}>
        Username: {username}
      </CustomText>
      <CustomText fontSize="14pt" fontWeight="bold" style={{ color: "white", textAlign: "center" }}>
        Age: {age}
      </CustomText>
      <CustomText fontSize="14pt" fontWeight="bold" style={{ color: "white", textAlign: "center" }}>
        Location: {location}
      </CustomText>
      <CustomText fontSize="14pt" fontWeight="bold" style={{ color: "white", textAlign: "center" }}>
        Job Position: {jobPosition}
      </CustomText>
      
    </CustomDiv>
  )
}

export default PeerProfile