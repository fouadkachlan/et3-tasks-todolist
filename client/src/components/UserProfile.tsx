import { Image } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../customComponents/CustomView'
import CustomText from '../customComponents/CustomText'
import axios from "axios"
import getLoginStore from '../stores/loginStore'
import { observer } from 'mobx-react-lite'
const userImage = require("../../../assets/userImage.png")



const UserProfile : React.FC= observer(() => {
  // const [profileData , setProfileData] = useState<any>(null);
  const handleProfileFetch  = async () : Promise<void>  => {
    try {
      const response = await axios.post("http://192.168.100.126:3000/api/getUserProfileData" , {
        email_Address : getLoginStore().email.get(),
        phone_Number : getLoginStore().phone_Number.get(),
        user_Country : getLoginStore().user_Country.get(),
      });
      const data = response.data;
      // setProfileData(data);
      const settingProfileData = getLoginStore().setProfileData(data.email_Address , data.phone_Number , data.user_Country);
      // console.log("Data message is here here here here:" , data);
      
    } catch ( error ) {
      console.error("Error fetching profile ,",error);
    }
  } 
  React.useEffect(() => {
    handleProfileFetch();
  } , []);

  return (
    <CustomView
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 750

      }}
    >
      <CustomView
        style ={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
      <CustomText
        style={{}}
        fontSize={30}
        fontWeight="bold"
      >
        This is my Profile
      </CustomText>
      </CustomView>
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image 
          style={{
            height: 200,
            width: 200,
            margin: 30
          }}
          source={userImage} />
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        margin: 20
      }}>
        <CustomText style={{
          
        }} fontSize={15} fontWeight='300'>
          Email: {getLoginStore().email.get()}
        </CustomText>
      </CustomView>
      
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        margin: 20
      }}>
        <CustomText style={{
          
        }} fontSize={15} fontWeight='300'>
          Phone Number: {getLoginStore().phone_Number.get()}
        </CustomText>
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        margin: 20
      }}>
        <CustomText style={{
          
        }} fontSize={15} fontWeight='300'>
          Country: {getLoginStore().user_Country.get()}
        </CustomText>
      </CustomView>
  
    </CustomView>
  )
})

export default UserProfile
