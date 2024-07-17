import { TouchableOpacity ,Alert , Image } from 'react-native'
import React from 'react'
import CustomView from '../customComponents/CustomView'
import CustomText from '../customComponents/CustomText'
import CustomInput from '../customComponents/CustomInput'
import getLoginStore from '../stores/loginStore'
import CustomButton from '../customComponents/CustomButton'
import { observer } from 'mobx-react-lite'


const ForgotPassword : React.FC = observer(() => {
  return (
    <CustomView style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50,
        height: '100%',
        backgroundColor: 'white'
       }} >
        <CustomText 
            style={{
              color : "#77E4C8",
              width: 400,
              marginLeft: 20
            }}
            fontSize={40}
            fontWeight={'bold'}
        >Forgot Password</CustomText>

        <CustomText
          style={{}}
          fontSize={15}
          fontWeight={'300'}
        >
          Type your email to be able to send you a link to reset your password
        </CustomText>
        <CustomText
          style={{
            color: "black",
             marginTop: 90,
             marginRight: 150,
             width: 200
            }}
          fontSize={20}
          fontWeight={'500'}
        >
          Email Address
        </CustomText>

      <CustomInput 
        style={{
          marginBottom:100,
          width:350
        }}
        height={70}
        margin={20}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().email.get()}
        onChangeText={getLoginStore().setEmail}
        placeholder="hello@example.com" 
        keyboardType="email-address"  
        secureTextEntry={false}

        />
        <CustomView 
          style={{
            paddingBottom:0,
            marginLeft:5
          }}
        >
            <CustomButton 
                style={{ backgroundColor: '#77E4C8'  , marginBottom: 35 , borderRadius: 30}}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}
                >
                    <CustomText
                        style={{color: 'black' , marginTop:15, marginLeft:135}}
                        fontSize={20}
                        fontWeight='300'
                    >Submit</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
          

    </CustomView>
  )
})
export default ForgotPassword