import { Image , TouchableOpacity } from 'react-native'
import React from 'react'
import CustomView from '../customComponents/CustomView'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../types/navigation'
import getLoginStore from '../stores/loginStore'
import { observer } from 'mobx-react-lite'


const userImage = require("../../../assets/userImage.png")
const settingImage = require("../../../assets/settings.png")
const  logoutImage = require("../../../assets/logout.png"); 



const Navigation : React.FC= observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleLogout = () => {
        getLoginStore().resetCredentials();
        navigation.navigate("Login");
    }

  return (
    <CustomView
            style={{
                
            }}
        >
            <CustomView
                style={{
                    display: 'flex',
                   
                }}
            >
                <CustomView
                style={{
                    backgroundColor: '#77E4C8',
                    display: 'flex',
                    justifyContent:'center',
                    flexDirection: 'row',
                    gap: 120
                }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("userProfile")}}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5,
                        }} source={userImage} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5,
                        }} source={settingImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5, 
                        }} source={logoutImage} />
                    </TouchableOpacity>
                </CustomView>
            </CustomView>
    </CustomView>
  )
})

export default Navigation