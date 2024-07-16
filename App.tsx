import React from 'react'
import Login from './client/src/components/Login'
import WelcomingScreen from './client/src/components/WelcomingScreen'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateAccount from './client/src/components/CreateAccount';
import ForgotPassword from './client/src/components/ForgotPassword';
import HomeNewsScreen from './client/src/components/HomeNewsScreen';
import userProfile from "./client/src/components/UserProfile";
import Settings from "./client/src/components/Settings";
import AddNewsPopUp from './client/src/components/AddNewsPopUp';
const Stack = createNativeStackNavigator();

const App : React.FC = () => {



  return ( 
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcoming">
        <Stack.Screen name="Welcoming" component={WelcomingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="userProfile" component={userProfile} />
        <Stack.Screen name="HomeNewsScreen" component={HomeNewsScreen} />
        <Stack.Screen name="AddNewsPopUp" component={AddNewsPopUp} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App