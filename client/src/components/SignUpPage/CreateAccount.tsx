import React from 'react';
import CustomView from '../../customComponents/CustomView';
import CustomButton from '../../customComponents/CustomButton';
import CustomText from '../../customComponents/CustomText';
import CustomInput from '../../customComponents/CustomInput';
import getLoginStore from '../../stores/loginStore';
import { observer } from 'mobx-react-lite';
import axios from "axios";
import { Alert } from 'react-native';
import {useNavigation , NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from '../../types/navigation';

const CreateAccount : React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = async () :Promise<void> => {
    const IP_ADDRESS = "192.168.100.126"

    try 
    {
      const response = await axios.post(`http://${IP_ADDRESS}:3000/api/createUser` , {
        email_Address : getLoginStore().email.get(),
        Password: getLoginStore().password.get(),
        phone_Number : getLoginStore().phone_Number.get(),
        user_Country : getLoginStore().user_Country.get()
      });
      const data = response.data
      if (data.message === "User Created Successfully")
      {
        Alert.alert("Congratulations, you are now in our community");
        navigation.navigate("Login");
      }
    } catch ( error ) {
      console.error("Error during Sign Up", error);
      Alert.alert("Error" , "Failed to Sign Up. Please try again later.")
    }

    
  }


  return (
    <CustomView style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'flex-start',
      width: 400,
      height: 750,
      backgroundColor: 'white',
      }}>
        <CustomText 
            style={{
              color : "#77E4C8",
              marginLeft: 10
            }}
            fontSize={50}
            fontWeight={'bold'}
        >Sign Up</CustomText>

        <CustomText
          style={{marginLeft: 10}}
          fontSize={20}
          fontWeight={'400'}
        >
          Welcome in our app
        </CustomText>
        <CustomText
          style={{color: "black", marginTop: 20 , marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Email Address
        </CustomText>

      <CustomInput 
        style={{width: 350}}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().email.get()}
        onChangeText={(email : string)=>getLoginStore().setEmail(email)}
        placeholder="hello@example.com" 
        keyboardType="email-address"  
        secureTextEntry={false}

        />
         <CustomText
          style={{color: "black", marginTop: 5, marginLeft: 10}}
          fontSize={20}
          fontWeight={'500'}
        >
          Password
        </CustomText>
      <CustomInput 
        style={{marginBottom:30 , width: 350}}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="*********" 
        value={getLoginStore().password.get()}
        onChangeText={(password : string)=> getLoginStore().setPassword(password) }
        keyboardType="password "
        secureTextEntry={true}
        />
        <CustomView style ={{
          display: 'flex',
          flexDirection: 'row',
          gap: 60
        }}>
           <CustomText
          style={{color: "black", marginTop: 5 , marginLeft: 10}}
          fontSize={20}
          fontWeight={'500'}
        >
          User Country
        </CustomText>
        <CustomText
          style={{color: "black", marginTop: 5 ,marginLeft: 10}}
          fontSize={20}
          fontWeight={'500'}
        >
          Phone Number
        </CustomText>
        </CustomView>
        <CustomView style={{
          display: 'flex',
          flexDirection: 'row',
          width: '50%'
        }}>
          
      <CustomInput 
        style={{marginBottom:30}}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="example: Lebanon" 
        value={getLoginStore().user_Country.get()}
        onChangeText={(country : string)=> getLoginStore().setUserCountry(country)}
        keyboardType="default"
        secureTextEntry={false}
        />
        
      <CustomInput 
        style={{marginBottom:30}}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="+961-XXX-XXX => " 
        value={getLoginStore().phone_Number.get()}
        onChangeText={(number : string)=> getLoginStore().setPhoneNumber(number)}
        keyboardType="number-pad"
        secureTextEntry={false}
        />
        </CustomView>
          <CustomView 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 6
          }}
        >
            <CustomButton onPress={handleSignUp}
                style={{
                  backgroundColor: '#77E4C8',
                  marginBottom: 5 ,
                  borderRadius: 30,
                  marginLeft: 10
                }}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{display:'flex' , justifyContent:'center' , alignContent:'center'}}
                >
                    <CustomText
                        style={{color: 'black' , marginTop:10, marginLeft:140}}
                        fontSize={20}
                        fontWeight='300'
                    >Sign Up</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>

    </CustomView>
  )
})
export default CreateAccount