import React from 'react';
import CustomView from '../customComponents/CustomView';
import CustomButton from '../customComponents/CustomButton';
import CustomText from '../customComponents/CustomText';
import CustomInput from '../customComponents/CustomInput';
import getLoginStore from '../stores/loginStore';
import { observer } from 'mobx-react-lite';

const CreateAccount : React.FC = observer(() => {
  return (
    <CustomView style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'flex-start',
      width: 400,
      height: 738,
      backgroundColor: 'white'
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
        keyboardType="visible-password"
        secureTextEntry={true}
        />
        <CustomText
          style={{color: "black", marginTop: 5 , marginLeft: 10}}
          fontSize={20}
          fontWeight={'500'}
        >
          Re-Enter Your password
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
        onChangeText={(password : string)=> getLoginStore().setPassword(password)}
        keyboardType="visible-password"
        secureTextEntry={true}
        />
        <CustomText
          style={{color: "black", marginTop: 5 ,marginLeft: 10}}
          fontSize={20}
          fontWeight={'500'}
        >
          Phone Number
        </CustomText>
      <CustomInput 
        style={{marginBottom:30 , width: 350}}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="+961-XXX-XXX" 
        value={getLoginStore().password.get()}
        onChangeText={(password : string)=> getLoginStore().setPhoneNumber(password)}
        keyboardType="default"
        secureTextEntry={true}
        />
          <CustomView 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 6
          }}
        >
            <CustomButton 
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